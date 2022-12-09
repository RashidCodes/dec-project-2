FROM --platform=amd64 node:alpine 

WORKDIR /app 

COPY package.json ./

COPY package-lock.json ./

COPY . ./

RUN npm install

CMD ["npm", "start"]


