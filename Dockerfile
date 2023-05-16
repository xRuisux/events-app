FROM node:latest

WORKDIR /usr/src/api

COPY . .
COPY ./.env.prod ./.env

RUN npm install --quiet --no-optional --no-fund --loglevel=error
RUN npm build

CMD ["npm", "run", "start:prod"]

