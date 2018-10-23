# Use Node.js version 10
FROM node:10-alpine

# Set the working directory
WORKDIR /usr/src

# Copy package manager files to the working directory and run install
COPY package.json ./
RUN yarn install

# Copy all files to the working directory
COPY . .

# Build the app and move the resulting build to the `/public` directory
RUN yarn build
RUN mv ./build /public