# Use an official Node runtime as a base image
FROM node:latest

# install simple http server for serving static content
# RUN npm install -g http-server

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY vue/package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY vue/ ./