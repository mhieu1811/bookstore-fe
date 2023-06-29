# Stage 1: Build the Angular app
FROM node:18 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve the Angular app with Nginx
FROM nginx:latest
COPY --from=build /usr/src/app/dist/bookstore-fe /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]