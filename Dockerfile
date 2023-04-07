FROM nginx:latest

COPY webpage/build /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 443
