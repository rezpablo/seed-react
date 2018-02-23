#!/bin/bash

docker rm -f parseserver

docker run -d \
    --restart=always \
    --name=parseserver \
    -p 1337:1337 \
    rezpablo/parseserver

