# Backend Stage: Build
FROM node:18-alpine AS backend-build

WORKDIR /usr/src/backend
COPY backend/package*.json ./
RUN npm install
COPY backend/ ./

# Frontend Stage: Build
FROM node:18-alpine AS frontend-build

WORKDIR /usr/src/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Testing Stage
FROM node:18-alpine AS test

WORKDIR /usr/src/test
# Copy the test dependencies and source from frontend-build
COPY --from=frontend-build /usr/src/frontend/package*.json ./
COPY --from=frontend-build /usr/src/frontend/node_modules ./node_modules
COPY --from=frontend-build /usr/src/frontend/src ./src
COPY --from=frontend-build /usr/src/frontend/public ./public

# Run tests
RUN npm test -- --passWithNoTests

# Production Stage: Final Image
FROM node:18-alpine AS production

WORKDIR /usr/src/app

# Copy backend from the backend-build stage
COPY --from=backend-build /usr/src/backend ./

# Copy frontend build artifacts into backend's public folder
COPY --from=frontend-build /usr/src/frontend/build ./public

# Expose port and start the application
EXPOSE 3001
CMD ["node", "app.js"]
