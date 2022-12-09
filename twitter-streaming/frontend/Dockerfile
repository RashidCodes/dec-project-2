FROM node:alpine 

WORKDIR /app 

COPY package.json ./ 

COPY package-lock.json ./ 

COPY . .

RUN npm i 

RUN npm uninstall react-scripts 

RUN npm install react-scripts

CMD ["npm", "run", "start"]


