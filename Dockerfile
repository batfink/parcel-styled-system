FROM nginx:1.15.8-alpine
WORKDIR /app
COPY ./dist .
COPY nginx.conf /etc/nginx/conf.d/default.conf
