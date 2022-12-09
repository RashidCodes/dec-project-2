FROM nginx:1.19.0 

WORKDIR /usr/share/nginx/html

COPY . /usr/share/nginx/html/

ENTRYPOINT ["nginx", "-g", "daemon off;"]