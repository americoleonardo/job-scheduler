# Job Scheduler

![build status](https://travis-ci.com/americoleonardo/job-scheduler.svg?token=Sji86EXaLt2QvfpuiYLf&branch=main)

## Description

A challenge to order schedulling with specific parsed input data developed using NestJS framework application.

## Installation

```bash
$ yarn install
```

## Job Scheduler

## Running the application

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# test coverage
$ yarn run test:cov
```

## Swagger API

```
http://localhost:3000/api
```

## Build compodoc structure

```
$ npx @compodoc/compodoc -p tsconfig.json -s

# Browse at /documentation
```


## Challenge file disposition

```
job-scheduler/
|── src/
│ ├── module
│   ├── dto
│   ├── interfaces
│   ├── module.controller.ts
│   ├── module.service.ts

```

