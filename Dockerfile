FROM node:13.10

RUN mkdir /app
WORKDIR /app

CMD [ "npm", "run", "debug" ]