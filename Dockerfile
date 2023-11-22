# Imagem base
FROM node:21-alpine3.17

ENV TZ=America/Sao_Paulo
ENV LANG C.UTF-8
ENV LANGUAGE=pt_BR:pt
ENV LC_ALL C.UTF-8

RUN apk update && apk upgrade && apk add bash

WORKDIR /home/app/
COPY . /home/app/

CMD [ "tail", "-f", "/dev/null" ]
