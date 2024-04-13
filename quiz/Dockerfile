FROM node:lts-alpine AS base

WORKDIR /quiz

COPY package*.json /quiz/
RUN npm install
RUN npm install @vue/cli@3.7.0 -g

COPY . /quiz

FROM node:lts-slim AS production
WORKDIR /quiz

COPY --from=base /quiz /quiz

EXPOSE 8083
# start app
CMD ["npm", "run", "dev"]