# Include node image
FROM node:13 as builder

# Where app will run
RUN mkdir -p /usr/src/app

#Changes where commands will be run
WORKDIR /usr/src/app

#copies our app locally into build location + dependecy definitions
COPY package*.json ./

#installs dependencies
RUN npm install

#gets all code for app
COPY . /usr/src/app

#exposes port for access 
EXPOSE 3000

# starts app
CMD ["npm", "start"]