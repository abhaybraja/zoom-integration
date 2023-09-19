#Stage 1
FROM node:20.6.1 as builder
WORKDIR /app
COPY frontend/package.json .
COPY frontend/yarn.lock .
RUN yarn install
COPY frontend/. .
RUN yarn run build

#Stage 2
FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]