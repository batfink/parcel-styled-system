# Copies files and runs npm install (from lock-file)
FROM node:12.0.0 as builder
WORKDIR /app
COPY package* ./
COPY src/ src/
RUN ["npm", "ci"]
RUN ["npm", "run", "build"]

FROM nginx:1.16.0-alpine as server
WORKDIR /app
COPY --from=builder /app/dist .
COPY nginx.conf /etc/nginx/conf.d/default.conf
