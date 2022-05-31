#!/usr/bin/env bash
eval $(printenv | sed -n "s/^\([^=]\+\)=\(.*\)$/export \1=\2/p" | sed 's/"/\\\"/g' | sed '/=/s//="/' | sed 's/$/"/' >> /etc/profile)

#!/usr/bin/env sh
cp /usr/share/nginx/html/js/*.js /tmp

# runs a command to get the names of all existing environment variables and stores those in $EXISTING_VARS
export EXISTING_VARS=$(printenv | awk -F= '{print $1}' | sed 's/^/\$/g' | paste -sd,);

# loops through each JavaScript file in your production folder and replaces any $VARIABLE with the actual value of that environment variable
for file in /tmp/*.js;
do
cat $file | envsubst $EXISTING_VARS | tee /usr/share/nginx/html/js/$(basename $file)
done
nginx -g 'daemon off;'