# Use Node.js version 10
FROM node:10-alpine as builder

# Set the working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Copy package manager files to the working directory and run install
COPY package.json ./
RUN yarn install

# Copy all files to the working directory
COPY . .

# Build the app and move the resulting build to the `/public` directory
RUN yarn build
RUN mv ./build /public

EXPOSE 3000