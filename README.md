# ExceptionLibrary Documentation

NPM Library to handle different kind of api exceptions in a Express app

## Installation

---

Install library using [npm](https://www.npmjs.com/) package manager

```bash
npm install exception-library
```

## Usage

---

Add ExceptionHandler middleware to your express application

```nodejs
import express from 'express'
import { ExceptionHandler } from 'exception-library'

const app = express()
// After adding your route handlers

app.use(ExceptionHandler)

```

After this throw different types errors as your needs inside a route

## Supported Exceptions

---

### Bad Gateway Exception

```nodejs
router.get('/path', (req, res) => {
    ...

    throw new BadGatewayError("some reason")

    ...
})
```

### Bad Request Exception

```nodejs
router.get('/path', (req, res) => {
    ...

    throw new BadRequestError("some reason")

    ...
})
```

### Forbiddon Exception

```nodejs
router.get('/path', (req, res) => {
    ...

    throw new ForbiddenError("some reason")

    ...
})
```

### Internal Server Exception

```nodejs
router.get('/path', (req, res) => {
    ...

    throw new InternalServerError("some reason")

    ...
})
```

### Method not allowed Exception

```nodejs
router.get('/path', (req, res) => {
    ...

    throw new MethodNotAllowedError("some reason")

    ...
})
```

### Not found Exception

```nodejs
router.get('/path', (req, res) => {
    ...

    throw new NotFoundError("some reason")

    ...
})
```

### Not Implemented Exception

```nodejs
router.get('/path', (req, res) => {
    ...

    throw new NotImplementedError("some reason")

    ...
})
```

### Request Time Out Exception

```nodejs
router.get('/path', (req, res) => {
    ...

    throw new RequestTimeOutError("some reason")

    ...
})
```

### Unauthorized Exception

```nodejs
router.get('/path', (req, res) => {
    ...

    throw new UnorthorizedError("some reason")

    ...
})
```

## Data Types

---

### Return Error Type

Exceptions returns from API like follwoing format

```nodejs
interface ReturnErrorType<Type> {
    statusCode: number
    errors: Type[]
    type: string
}
```
