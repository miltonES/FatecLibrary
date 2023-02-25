FROM node:16.19
 
# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN npm install --force

# add app
COPY . ./

# start app
CMD ["npm", "start"]
