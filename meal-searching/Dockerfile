FROM node:lts-alpine AS base

WORKDIR /meal-searching

COPY package*.json /meal-searching/
RUN npm install
RUN npm install @vue/cli@3.7.0 -g

COPY . /meal-searching

FROM node:lts-slim AS production
WORKDIR /meal-searching

COPY --from=base /meal-searching /meal-searching

EXPOSE 8081
# start app
CMD ["npm", "run", "dev"]