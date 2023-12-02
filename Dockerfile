FROM node:20.3-alpine

# Install Dependencies
COPY package.json ./
RUN npm install

# Build Source
COPY . .
RUN npm run build

# Start
CMD sleep 3 && npm run start -p ${PORT}