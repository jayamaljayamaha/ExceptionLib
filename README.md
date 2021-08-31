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

```javascript
import express from "express";
import { ExceptionHandler } from "exception-library";

const app = express();

// After adding your route handlers

app.use(ExceptionHandler);
```

After this throw different types errors as your needs inside a route

## Supported Exceptions

---

### Bad Gateway Exception

```javascript
router.get('/path', (req, res) => {
    ...

    throw new BadGatewayError("some reason")

    ...
})
```

### Bad Request Exception

```javascript
router.get('/path', (req, res) => {
    ...

    throw new BadRequestError("some reason")

    ...
})
```

### Forbiddon Exception

```javascript
router.get('/path', (req, res) => {
    ...

    throw new ForbiddenError("some reason")

    ...
})
```

### Internal Server Exception

```javascript
router.get('/path', (req, res) => {
    ...

    throw new InternalServerError("some reason")

    ...
})
```

### Method not allowed Exception

```javascript
router.get('/path', (req, res) => {
    ...

    throw new MethodNotAllowedError("some reason")

    ...
})
```

### Not found Exception

```javascript
router.get('/path', (req, res) => {
    ...

    throw new NotFoundError("some reason")

    ...
})
```

### Not Implemented Exception

```javascript
router.get('/path', (req, res) => {
    ...

    throw new NotImplementedError("some reason")

    ...
})
```

### Request Time Out Exception

```javascript
router.get('/path', (req, res) => {
    ...

    throw new RequestTimeOutError("some reason")

    ...
})
```

### Unauthorized Exception

```javascript
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

```javascript
interface ReturnErrorType<Type> {
    statusCode: number
    errors: Type[]
    type: string
}
```
