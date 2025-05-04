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

# Install Prisma globally and generate Prisma client
RUN npm install -g prisma
RUN npx prisma generate

# Define build arguments for the environment variables (without values)
ARG DATABASE_URL
ARG DIRECT_URL
ARG NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
ARG CLERK_SECRET_KEY
ARG NEXT_PUBLIC_CLERK_SIGN_IN_URL
ARG NEXT_PUBLIC_CLERK_SIGN_UP_URL
ARG NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL
ARG NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL
ARG OPENAI_API_KEY
ARG GEMINI_API_KEY
ARG NEXT_PUBLIC_PUBLISHABLE_KEY
ARG STRIPE_SECRET_KEY
ARG WEBHOOK_ENDPOINT_SECRET
ARG NEXT_PUBLIC_BASE_URL








