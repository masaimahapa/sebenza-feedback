# Sebenza Feedback App

## Description

This app allows users to submit feedback about their experience using Sebenza via public transport. The backend is built with Nest.js and it handles API requests and manages data. The frontend is a nice and user-friendly interace for submitting and reviewing feedback.

## Running the Database

To start the database, use the following command:
```bash
yarn db:dev:restart
```
This command removes the existing development database Docker container, recreates it, and deploys the Prisma migrations, ensuring the database schema is up to date.


## Backend (Nest.js app)

### Setup and Installation

```bash
cd backend
yarn
```


### Running the Application

```bash
yarn start:dev
```
The backend API is available at http://localhost:3333.
## API Endpoints

### Feedback API Endpoints


- `POST /feedback`: Create new feedback. Requires a body with `title`, `description`, `cell_number`, and `status`.
- `GET /feedback`: Retrieve all feedback entries.
- `GET /feedback/:id`: Get details of a specific feedback entry by its ID.
- `PATCH /feedback/:id`: Update an existing feedback entry by ID. Requires some fields of `FeedbackDto` to update.
- `DELETE /feedback/:id`: Delete a specific feedback entry by its ID.


### User API Endpoints

- `POST /users`: Create a new user. Requires a body with user details specified in `CreateUserDto`.
- `GET /users`: Retrieve a list of all users.
- `GET /users/:id`: Get details of a specific user by their ID.
- `PATCH /users/:id`: Update an existing user by ID. This operation requires some fields of `UpdateUserDto` to update.
- `DELETE /users/:id`: Delete a specific user by their ID.

These endpoints allow for full CRUD operations on feedback and user entities within the system.

---

## Frontend (React app)

### Setup and Installation

```bash
cd frontend
yarn
```

### Running the Application

```bash
yarn dev
```
The frontend can be accessed at http://localhost:5173.

# Future Improvements
### Security
To enhance the application's security, I plan to:

- Implement Authentication and Authorization: Introduce user login functionality with role-based access control to secure endpoints.

### Implementation of Testing

I plan to implement testing in the future to ensure the application's reliability and stability. This will include unit tests for individual components and end-to-end tests to cover the entire application flow.