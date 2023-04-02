# BackAppX

BackAppX is a MERN stack BaaS application that allows users to create and manage their own backends without needing to write any server-side code.

## Getting started

To get started with BackAppX, follow these steps:

1. Clone this repository to your local machine.
2. Install the necessary dependencies by running `npm install`.
3. Start the server by running `npm start`.

Once the server is running, you can access the BackAppX API by sending requests to `http://localhost:9092`.

## Using the API

BackAppX provides the following API documentation:

- `/api-docs`: Get a list of all api routes.

To create a new user, send a POST request to `/users/create` with the following data:
{
"name": "John Smith",
"email": "john.smith@example.com",
"password": "password123"
}
The response will include the ID of the newly-created user.

## Contributing

If you'd like to contribute to BackAppX, follow these steps:

1. Fork this repository.
2. Make your changes.
3. Submit a pull request.

## Tech stack

BackAppX was built using the following technologies:

- MongoDB
- Express.js
- React.js
- Node.js

## License

BackAppX is licensed under the MIT license. See LICENSE.md for more information.
