# disk image base 
FROM node:12 

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

RUN yarn install

COPY . .

ENV PORT=7000

EXPOSE 7000

CMD ["node", "server.js"]