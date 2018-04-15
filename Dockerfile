FROM node

ENV NPM_CONFIG_LOGLEVEL warn
ARG app_env
ENV APP_ENV $app_env

RUN mkdir -p /hb
WORKDIR /hb

COPY package.json package.json
RUN npm install

COPY ./ ./

CMD npm start

EXPOSE 8080
