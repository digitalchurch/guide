FROM node:20-slim

WORKDIR /usr/src/app

# Copy package files first
COPY package*.json ./

# Clean install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

EXPOSE 3000

# Run the development server directly (removing nodemon)
CMD ["npm", "start"] 