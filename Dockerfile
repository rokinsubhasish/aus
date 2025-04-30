FROM mcr.microsoft.com/playwright:v1.52.0

WORKDIR /regression

COPY ./entrypoint.sh ./entrypoint.sh
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
COPY ./playwright.config.ts ./playwright.config.ts

RUN mkdir ./test-results-all

RUN npm ci

ENTRYPOINT ["./entrypoint.sh"]
