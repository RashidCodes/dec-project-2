FROM node:alpine 

WORKDIR /app 

COPY package.json ./ 

COPY . .

RUN npm i 

RUN npm install --save react-scripts

CMD ["npm", "run", "start"]


