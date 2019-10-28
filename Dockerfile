# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:slim as build-stage
WORKDIR /app
COPY . /app/
RUN npm install
RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:alpine
RUN rm -rf /etc/nginx/html/*
COPY --from=build-stage /app/build /etc/nginx/html/
RUN ls /etc/nginx/html/
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]