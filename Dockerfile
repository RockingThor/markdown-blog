FROM node:14-alpine as build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile


COPY . .
RUN yarn build

# Stage 2
FROM nginx:alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80

# Start Nginx server to serve the app
CMD ["nginx", "-g", "daemon off;"]


