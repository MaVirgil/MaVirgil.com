FROM node:lts AS build
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM httpd:2.4 AS runtime
RUN echo "ServerName localhost" >> /usr/local/apache2/conf/httpd.conf
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 80