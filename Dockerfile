# syntax=docker/dockerfile:1

FROM node:12 

WORKDIR /app

COPY package.json /app

COPY yarn.lock /app

RUN yarn install

COPY . .

EXPOSE 7000

CMD ["yarn", "start"]