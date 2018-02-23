#!/bin/bash

docker rm -f mongo

docker run -d \
    --name=mongo \
    -p 27017:27017 \
    --restart=always -v \
    `pwd`/mongoData:/data/db \
    rezpablo/mongodb
