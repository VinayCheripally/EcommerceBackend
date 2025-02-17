    # Use an official Node.js runtime as a parent image
    FROM node:16

    # Set the working directory in the container
    WORKDIR /usr/src/app

    # Copy package.json and package-lock.json
    COPY package*.json ./

    # Install dependencies
    RUN npm install

    RUN npm install -g nodemon

    # Copy the rest of the application code
    COPY . .

    # Expose the port the app runs on
    EXPOSE 5000

    # Command to run the application
    CMD ["npm", "start"]