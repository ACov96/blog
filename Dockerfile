FROM node:16

RUN apt update && apt upgrade -y

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 80

CMD ["/usr/local/bin/node", "./node_modules/serve/bin/serve.js", "-l", "80", "-s", "./dist/"]
