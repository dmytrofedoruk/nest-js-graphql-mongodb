FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# Bundle app source
COPY . .

RUN npm run build

EXPOSE 3003

CMD [ "npm", "run start:dev" ]