FROM node:latest
MAINTAINER JesusLC <jeslopcru@gmail.com>

RUN \
  apt-get update && \
  apt-get install -y ruby

RUN gem install sass 

RUN npm install -g bower http-server gulp node-sass
 
RUN mkdir /app
WORKDIR /app
ADD . /app


RUN npm install 
RUN bower install --config.interactive=false --allow-root

EXPOSE 8080:8080
