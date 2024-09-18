# Compilation
FROM node:18-alpine AS builder
WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm config set store-dir /app/.pnpm-store
RUN pnpm install

COPY . .

RUN rm -rf node_modules
RUN pnpm install typescript -D
RUN pnpm run build

RUN cp -r src/public dist/public

# Prod
FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --production

EXPOSE 3000

CMD ["node", "dist/app.js"]
