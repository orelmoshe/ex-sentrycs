# docker build --no-cache -t <container-name>:latest .
FROM  node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
