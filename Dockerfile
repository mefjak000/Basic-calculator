FROM httpd:latest

RUN mkdir /App

COPY /src/* /usr/local/apache2/htdocs/

RUN apt update
RUN apt install nano
RUN apt install git-all -y