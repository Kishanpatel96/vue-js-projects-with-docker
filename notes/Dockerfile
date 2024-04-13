FROM node:lts-alpine AS base

WORKDIR /notes

COPY package*.json /notes/
RUN npm install
RUN npm install @vue/cli@3.7.0 -g

COPY . /notes

FROM node:lts-slim AS production
WORKDIR /notes

COPY --from=base /notes /notes

EXPOSE 8082
# start app
CMD ["npm", "run", "dev"]