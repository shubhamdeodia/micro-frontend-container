# Step 1
FROM node:16-alpine AS builder

ENV JQ_VERSION=1.6
RUN wget --no-check-certificate https://github.com/stedolan/jq/releases/download/jq-${JQ_VERSION}/jq-linux64 -O /tmp/jq-linux64
RUN cp /tmp/jq-linux64 /usr/bin/jq
RUN chmod +x /usr/bin/jq

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install --ignore-scripts

RUN npm run build

RUN jq 'to_entries | map_values({ (.key) : ("$" + .key) }) | reduce .[] as $item ({}; . + $item)' ./src/config.json > ./src/config.tmp.json && mv ./src/config.tmp.json ./src/config.json

ARG GIT_SHA
RUN echo $GIT_SHA > ./build/SHA.txt


# Step 2
FROM nginx:alpine AS runtime

COPY --from=builder ./app/build /usr/share/nginx/html

ENV JSFOLDER=/usr/share/nginx/html/js/*.json

# Alpine docker image doesn't have bash installed by default. 
# You will need to add the following commands to get bash:
RUN apk add --no-cache bash

RUN rm /etc/nginx/conf.d/default.conf

COPY ./infra/nginx.conf /etc/nginx/conf.d/application.conf

COPY ./infra/start-nginx.sh  /usr/bin/start-nginx.sh

RUN chmod +x /usr/bin/start-nginx.sh

## add permissions for nginx user
RUN chmod 777 -R /usr/share/nginx/html && \
    chmod 777 -R /var/cache/nginx && \
    chmod 777 -R /var/log/nginx && \
    chmod 777 -R /etc/nginx/conf.d

RUN touch /var/run/nginx.pid && \
    chmod 777 -R /var/run/nginx.pid

EXPOSE 8080

ENTRYPOINT [ "start-nginx.sh" ]