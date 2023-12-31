FROM node:20.3-alpine

WORKDIR /src/

# Install Dependencies
COPY package.json ./
RUN npm install

# Build Source
COPY . .
RUN npm run build

# Start
CMD sleep 3 && npx next start -H 0.0.0.0 -p ${PORT}