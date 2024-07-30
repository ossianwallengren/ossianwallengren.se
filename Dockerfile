FROM oven/bun:1-alpine AS base
WORKDIR /usr/src/app

FROM base AS build
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile
COPY eslint.config.js svelte.config.js tsconfig.json vite.config.ts ./
COPY src src
COPY static static

ENV NODE_ENV=production
RUN bun run build

FROM base AS release
COPY --from=build /usr/src/app/build .
RUN bun install --frozen-lockfile --production

USER bun
CMD [ "bun", "run", "start" ]
