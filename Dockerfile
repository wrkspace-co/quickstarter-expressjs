FROM node:20-alpine
WORKDIR /app

COPY package.json ./
RUN npm install --no-audit --fund=false

COPY . .

EXPOSE 3000
CMD ["npm","run","dev"]          # hot-reload watcher
