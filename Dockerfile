FROM node:14-alpine

WORKDIR /srv/app

COPY package*.json ./
RUN npm install

RUN npm install glob rimraf

COPY . .

EXPOSE ${APP_PORT}
RUN npm run build