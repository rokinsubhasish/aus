FROM mcr.microsoft.com/playwright:v1.52.0

WORKDIR /regression

COPY .github/workflows/playwright.yml ./.github/workflows/playwright.yml
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
COPY ./playwright.config.ts ./playwright.config.ts
COPY ./eslint.config.mjs ./eslint.config.mjs
COPY ./tsconfig.json ./tsconfig.json

RUN mkdir ./playwright-report-all

RUN npm ci

ENTRYPOINT ["./entrypoint.sh"]
