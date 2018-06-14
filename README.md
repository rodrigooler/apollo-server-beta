# Apollo Server Beta

[![npm version](https://badge.fury.io/js/apollo-server-core.svg)](https://badge.fury.io/js/apollo-server-core)
[![Build Status](https://circleci.com/gh/apollographql/apollo-cache-control-js.svg?style=svg)](https://circleci.com/gh/apollographql/apollo-cache-control-js)
[![Get on Slack](https://img.shields.io/badge/slack-join-orange.svg)](https://www.apollographql.com/#slack)

Apollo Server is a community-maintained open-source GraphQL server. It works with pretty much all Node.js HTTP server frameworks, and we're happy to take PRs for more! Apollo Server works with any GraphQL schema built with [GraphQL.js](https://github.com/graphql/graphql-js), so you can build your schema with that directly or with a convenience library such as [graphql-tools](https://www.apollographql.com/docs/graphql-tools/).

## Documentation

[Read the docs!](https://www.apollographql.com/docs/apollo-server/)

## Principles

Apollo Server is built with the following principles in mind:

* **By the community, for the community**: Apollo Server's development is driven by the needs of developers
* **Simplicity**: by keeping things simple, Apollo Server is easier to use, easier to contribute to, and more secure
* **Performance**: Apollo Server is well-tested and production-ready - no modifications needed

Anyone is welcome to contribute to Apollo Server, just read [CONTRIBUTING.md](./CONTRIBUTING.md), take a look at the [roadmap](./ROADMAP.md) and make your first PR!

## Getting started

- 1 - `git clone git@github.com:rodrigooler/apollo-server-beta.git`
- 2 - `cd apollo-server-beta`
- 3 - `npm run start or npm run dev (nodemon)`;

>### Running with Docker
>- 1 - Install [Docker](https://www.docker.com/get-docker)
>- 2 - `npm run docker:run` or `sudo npm run docker:run`

## Features
* **Cross-Platform:**.
* **`npm run docker:run`:** Run the image you built on your local Docker instance. When you run `docker ps` your image will identified by the `imageName` you specify in `package.json`.

## Running
You're done. Now run your scripts. To build and publish an image you only need to use two of the commands frequently.
1. **`npm run docker:taillogs`:** Shows logs for webserver.
2. **`npm run docker:clean`:** Kills the container that is running. 


[Thanks for duluca!](https://gist.github.com/duluca/d13e501e870215586271b0f9ce1781ce/)