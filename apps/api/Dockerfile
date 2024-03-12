# Build stage
FROM --platform=linux/amd64 node:20-alpine as builder

WORKDIR /usr/app

# Install utilities
RUN yarn global add typescript
RUN yarn global add tsc-alias

# Build service
COPY package.json ./
RUN yarn install
COPY . ./
RUN yarn build

# Run stage
FROM --platform=linux/amd64 node:20-alpine

WORKDIR /usr/app

COPY package.json ./
RUN yarn install --production

COPY --from=builder /usr/app/dist ./dist

ENV NODE_ENV=production

CMD [ "node", "dist/index.js" ]