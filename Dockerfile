# ============================================
# Stage 1: Build the React/Vite Application
# ============================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests first for Docker layer caching
COPY package*.json ./

# Install dependencies using clean install (uses package-lock.json)
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the production-optimized static assets
RUN npm run build

# ============================================
# Stage 2: Serve with Nginx
# ============================================
FROM nginx:alpine

# Copy the built static files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start Nginx in foreground mode
CMD ["nginx", "-g", "daemon off;"]