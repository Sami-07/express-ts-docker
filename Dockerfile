FROM node:20

WORKDIR /app

COPY . .

RUN npm install
RUN npm install mongoose
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]