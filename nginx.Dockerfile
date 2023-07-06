FROM nginx:1.23-alpine

EXPOSE 443

COPY ./nginx.conf /etc/nginx/conf.d/
COPY ./admin /admin-page