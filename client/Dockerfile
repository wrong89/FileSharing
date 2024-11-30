FROM node:alpine AS development

ENV NODE_ENV development

WORKDIR /client

COPY package.json /client
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]