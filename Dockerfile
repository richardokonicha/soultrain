# Use the official Node.js image as the base image
FROM node:16-alpine

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5050

CMD ["npm", "start"]
