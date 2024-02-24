# Veet - API

## Features

- [x] Type-safety for env variables
- [x] Logger
- [x] Eslint
- [x] Prettier
- [x] Docker
- [x] OpenAPI Spec (Swagger)
- [x] Unit testing
- [x] Integration testing
- [x] E2E testing
- [ ] Load testing
- [ ] Continuous Integration
- [ ] Continuous Deployment
- [ ] AWS Integration
- [ ] Type-safety endpoints
- [ ] Monitoring
- [ ] Rate-limiting

## Project sctructure

```js
+-- src
|   +-- config // environment configuration
|   +-- controllers // controllers with injected services from `domain` folder
|   +-- domain // source code
|   |   +-- entities // core entities
|   |   +-- interfaces // interfaces for interacting with external services e.g. Database, Cache, FileStorage etc
|   |   +-- schemas // objects for input validation
|   |   +-- services // bussiness logic
|   |   +-- types // shared types
|   +-- infrastructure // adapters for external services like PostgreSQL, Redis, S3, etc
|   +-- routes // routes with Open API comments
|   +-- server.ts // server configuration
|   +-- index.ts // entrypoint for the app
|   +-- *
+-- tests // testing folder
|   |   +-- e2e // E2E testing
|   |   +-- integration // Integration with external services testing. e.g. Redis, S3, PostgreSQL, etc
+-- .env.example // example values for environment variables
```
