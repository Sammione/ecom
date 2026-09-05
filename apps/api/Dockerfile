FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json turbo.json ./
COPY packages ./packages
COPY apps/api ./apps/api
RUN npm install
RUN npx turbo run build --filter=api...

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/api ./apps/api
COPY --from=builder /app/packages ./packages
EXPOSE 4000
CMD ["npm", "run", "start", "-w", "apps/api"]
