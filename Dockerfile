# Base image
FROM node:12.2.0-alpine

# Set working directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
COPY . .
RUN npm install

# TODO: submit an issue for securely storing user.name and user.email (below)

ARG GH_PASS_ARG

# Set up git to use gh-pages
RUN apk update
RUN apk upgrade
RUN apk add --no-cache git
RUN git init
RUN git remote add origin https://csvrcek:${GH_PASS_ARG}@github.com/csvrcek/personal-website-mk3.git
RUN git config --global user.name "Connor Svrcek"
RUN git config --global user.email csvrcek@umich.edu

# Deploy to prod
CMD ["npm", "run", "deploy"]