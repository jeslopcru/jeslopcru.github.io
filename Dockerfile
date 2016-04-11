FROM node:latest
MAINTAINER jesuslc

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


#COPY . /app
#RUN http-server 
#RUN gulp watch  

#Construir la imagen desde el Dockerfile
# docker build --rm -t "jeslopcru/docker-angular-cv" .

#Run el container
#docker run -p 8080:8080 -d jeslopcru/docker-angular-cv


#Ejecutar comando sobre el container
#docker exec 67cab7950d3f http-server 

# Eliminar containers 
#docker rm $(docker ps -a | awk '{print $1}')

#Eliminar imagenes
#docker rmi $(docker images | awk '{print $1":"$2}')
