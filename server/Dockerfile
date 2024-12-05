FROM node:20.11.0-alpine
WORKDIR /server

RUN apk add --no-cache redis

COPY package.json .

RUN npm install
COPY . .

EXPOSE 4000 6379
CMD ["npm", "run", "dev"]