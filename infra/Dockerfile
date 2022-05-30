# Step 1
FROM node:16-alpine AS builder

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install --ignore-scripts

RUN npm run build

ARG GIT_SHA
RUN echo $GIT_SHA > ./build/SHA.txt


# Step 2
FROM nginx:alpine AS runtime

COPY --from=builder ./app/build /usr/share/nginx/html

# Alpine docker image doesn't have bash installed by default. 
# You will need to add the following commands to get bash:
RUN apk add --no-cache bash

RUN rm /etc/nginx/conf.d/default.conf

COPY ./infra/nginx.conf /etc/nginx/conf.d/application.conf

## add permissions for nginx user
RUN chmod 777 -R /usr/share/nginx/html && \
    chmod 777 -R /var/cache/nginx && \
    chmod 777 -R /var/log/nginx && \
    chmod 777 -R /etc/nginx/conf.d

RUN touch /var/run/nginx.pid && \
    chmod 777 -R /var/run/nginx.pid

ENTRYPOINT [ "./infra/statup.sh" ]

# run the bash file and then start Nginx server
CMD ["/bin/bash", "-c", "nginx -g \"daemon off;\""]