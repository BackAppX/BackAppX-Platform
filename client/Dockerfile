
FROM node:14-alpine

WORKDIR /app


COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENV NODE_ENV=production

EXPOSE 4000

CMD ["npm", "start"]