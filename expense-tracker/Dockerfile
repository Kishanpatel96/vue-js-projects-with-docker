FROM node:lts-alpine AS base

WORKDIR /expense-tracker

COPY package*.json /expense-tracker/
RUN npm install
RUN npm install @vue/cli@3.7.0 -g

COPY . /expense-tracker

FROM node:lts-slim AS production
WORKDIR /expense-tracker

COPY --from=base /expense-tracker /expense-tracker

EXPOSE 8080
# start app
CMD ["npm", "run", "dev"]