# UBER Backend API

## User Registration Endpoint

### POST /users/register

Registers a new user account.

### Request Body

Send a JSON object with the following fields:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "123456"
}
```

### Required Data

- fullname.firstname: required, must be at least 3 characters long
- fullname.lastname: optional, but if provided should be at least 3 characters long
- email: required, must be a valid email address
- password: required, must be at least 6 characters long

### Response

#### Success

- Status Code: 200 OK
- Response body includes:
  - token
  - user

#### Validation Error

- Status Code: 400 Bad Request
- Response body includes an errors array with details of validation failures

### Example Success Response

```json
{
  "token": "<jwt_token>",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  }
}
```
