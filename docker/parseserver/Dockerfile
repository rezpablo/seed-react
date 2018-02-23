FROM parseplatform/parse-server

COPY ./config.json /parse-server/config.json

ENTRYPOINT ["npm", "start", "--", "/parse-server/config.json"]
