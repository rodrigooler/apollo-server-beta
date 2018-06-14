# Download base image nodejs
FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

# Install libs with npm
RUN npm install

# Set port and start service
EXPOSE 3000

CMD ["npm", "start"]
