
FROM node:18.7.0-alpine as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app
RUN npm install && npm run build
#!/bin/sh
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY etc/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
