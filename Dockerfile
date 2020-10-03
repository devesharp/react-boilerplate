FROM node:10 as build-stage
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn --ignore-scripts
COPY . .
RUN yarn build

FROM nginx:alpine

COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY ./.docker/nginx.conf /etc/nginx/conf.d/default.conf