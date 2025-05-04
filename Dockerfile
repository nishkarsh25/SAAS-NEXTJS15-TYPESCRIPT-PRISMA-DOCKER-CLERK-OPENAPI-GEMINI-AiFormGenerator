# Use official nodejs image as the base image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json & package-lock.json file for dependency installation
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of your application code
COPY . .












