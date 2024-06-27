FROM node:20.14.0-alpine AS base

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Production build stage
FROM base AS build
RUN npm install -g @angular/cli
RUN npm run build

# Production runtime stage
FROM nginx:alpine AS production
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/dashboard-app/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
