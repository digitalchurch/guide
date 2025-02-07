FROM node:20-slim

WORKDIR /usr/src/app

COPY package*.json ./

# Install nodemon globally
RUN npm install -g nodemon

RUN npm install

COPY . .

EXPOSE 3000

# Use nodemon to run the app
CMD ["nodemon", "--exec", "npm start", "--watch", ".", "--ignore", "node_modules/"] 