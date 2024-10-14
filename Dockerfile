# Stage 1: Build the application
FROM node:20.12-alpine AS builder

# Set the working directory
WORKDIR /app

# Force reinstall Yarn 1.22.22 by removing the pre-existing Yarn
RUN npm install -g yarn@1.22.22 --force

# Copy the package.json and yarn.lock to install dependencies
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the application code into the container
COPY . .

# Clean the Yarn cache
RUN yarn cache clean

# Build the application for production
RUN yarn build

# Stage 2: Serve the built application using a lightweight server
FROM node:20.12-alpine

# Set the working directory for serving the app
WORKDIR /app

# Force reinstall Yarn 1.22.22 again
RUN npm install -g yarn@1.22.22 --force

# Install 'serve' package to serve the built static files
RUN yarn global add serve

# Copy the build files from the builder stage
COPY --from=builder /app/dist /app

# Expose port 3000 for the production server
EXPOSE 3000

# Start the app using 'serve' to serve static files
CMD ["serve", "-s", ".", "-l", "3000"]
