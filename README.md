# A responsive and multilingual web c.v.

This is my c.v. written as a responsive and multilingual web page using [AngularJS](https://angularjs.org/), [bootstrap](http://getbootstrap.com/) and the [paper](http://bootswatch.com/paper/) theme. It uses scss and includes a [gulp](http://gulpjs.com/) build to generate the stylesheets. Also included is a gulp task to generate a PDF using [wkhtmltopdf](https://code.google.com/hosting/moved?project=wkhtmltopdf). Extra formatting is applied using a pdf stylesheet to remove unnecessary web components such as navigation and to adjust the layout.

An example website can be found at [cv.jesuslc.con](cv.jesuslc.con) with a sample PDF.

The webpage is developed in a Docker container using [http-server (node)](https://www.npmjs.com/package/http-server), it's based on [javisr/pdf-web-curriculum](https://github.com/javisr/pdf-web-curriculum).

Check out the following blog entry for more details about the concept: [sharpfellows.com](http://sharpfellows.com/post/publishing-your-c-v-on-the-web-and-exporting-pdf-with-added-gulp-and-bootstrap).

## Getting started

You will need a working [Docker]()[bower](http://bower.io/) and [npm](https://www.npmjs.com/) installation. The run

```
    $ docker build --rm -t "jeslopcru/docker-angular-cv" .
	$ docker run -d -p 8080:8080 -it  -v /Users/JesusLC/Documents/Desarrollo/cv/jeslopcru.github.io:/app --name cv-github  jeslopcru/docker-angular-cv
    $ docker exec cv-github http-server 
```

## Compiling the stylesheets

Before you can run the site you will need to generate main.css. This can be done using gulp as follows:

```
    $ docker exec cv-github gulp sass
```

If you would like it to regenerate as you update the styles use:

```
	$ docker exec cv-github gulp build
```
Or you can use it:

```
	$ docker exec cv-github gulp watch
```


## Generating the PDF

Make sure you have [wkhtmltopdf](http://wkhtmltopdf.org/) installed with at least version 0.12. 

Then you can run the following to generate the pdf override styles and the pdf itself.

```
	$ docker exec cv-github gulp pdfsass

	$ wkhtmltopdf --margin-left 15 --margin-right 15 --zoom 1.0 --viewport-size 980x1024 http://docker.dev:8080/\#/en curriculum-jesuslc-en.pdf

	$ wkhtmltopdf --margin-left 15 --margin-right 15 --zoom 1.0 --viewport-size 980x1024 http://docker.dev:8080/\#/es curriculum-jesuslc-es.pdf
```


## Some useful Docker commands

- Start/Stop docker-machine: `$ docker-machine start ` / `$ docker-machine stop`
- Knows IP docker-machine: `$ docker-machine env`
- knows shared path and size in docker-machine `$ docker-machine ssh default 'df -h'`

- Start/Stop docker container: `$ docker start <containerid>` / `$ docker stop <containerid>`
- view all docker containers: `$ docker ps -a`
- Run a command inside a container: `$ docker exec <containerid> <command>` ==> `$ docker exec cv-github ls`
- Copy a file inside a container `$ docker cp <file>  <containerid>:<path>` ==> `docker cp hola.txt  38a0c40a313e:/app`

Clean Docker (http://magmax.org/blog/limpiando-dockers-antiguos/)
- Delete not started containers `$ docker rm $(docker ps -a | awk '{print $1}')`
- Delete not started images `$ docker rmi $(docker images | awk '{print $1":"$2}')`