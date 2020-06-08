FROM node:12.6.0-alpine
RUN apk add --no-cache bash

WORKDIR /app

COPY . .

ENV NPM_CONFIG_LOGLEVEL=warn
ENV NPM_CONFIG_COLOR=false
ENV PORT ''

RUN yarn run clean && \
    yarn install && \
    yarn build

CMD yarn start
