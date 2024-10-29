FROM node:latest

WORKDIR /app

COPY package.json /app

RUN npm install 

COPY . /app/

EXPOSE 70

CMD [ "node", "server.js" ]

