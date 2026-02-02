FROM node:lts AS build
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM httpd:2.4 AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
RUN echo "ErrorDocument 404 /404.html" >> /usr/local/apache2/conf/httpd.conf
EXPOSE 80