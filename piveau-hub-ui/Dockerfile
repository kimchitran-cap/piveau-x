# Stage 1: Build
FROM node:16-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json, package-lock.json, and local dependencies
COPY package.json package-lock.json* ./
COPY bin/ ./bin/

# Install dependencies
RUN npm install --frozen-lockfile --legacy-peer-deps

# Copy the rest of the project files
COPY . .

# Build the project
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 8080
EXPOSE 8080

# Copy custom nginx config to use port 8080
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
