# Stage 1: Build Node.js environment
ARG NODE_VERSION=20.10
FROM node:${NODE_VERSION}-alpine AS node_api

RUN mkdir -p /srv/app/node_modules && chown -R node:node /srv/app
RUN #mkdir -p /srv/app/dist && chown -R node:node /srv/app/dist

# Set working directory
WORKDIR /srv/app

# Install build dependencies
RUN set -eux; \
	apk add --no-cache --virtual .build-deps \
		g++ \
		gcc \
		git \
		make \
        python3 \
	;

# Upgrade npm to the latest version globally
RUN npm -g install npm@latest

# Stage 2: Copy application files and install dependencies
FROM node_api AS app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application source
COPY . .

# Expose the port the app runs on
ENV APP_PORT=3000
EXPOSE ${APP_PORT}

# Set the user to run the application
USER node

RUN #npm run build

# Define the command to run the app
#CMD ["npm", "run", "start:prod"]
