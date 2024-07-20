# MERN_bookstore

MERN_bookstore is a full-stack web application for managing a book inventory, developed as a project from freeCodeCamp. It demonstrates the implementation of CRUD operations using the MERN (MongoDB, Express, React, Node.js) stack, providing a practical example of building a complete web application using these technologies.


## Project Structure

The project is divided into two main parts:

1. Frontend (React application)
2. Backend (Node.js/Express API)

### Frontend

The React frontend is structured around the following components:

- `App.jsx`: Sets up routing using React Router
- `Home.jsx`: Main page of the application
- `CreateBooks.jsx`: Handles creation of new books
- `ShowBook.jsx`: Displays details of a specific book
- `EditBook.jsx`: Allows editing of book information
- `DeleteBook.jsx`: Handles book deletion

### Backend

The backend provides RESTful API endpoints for:

- Retrieving all books
- Getting a single book by ID
- Creating a new book
- Updating a book
- Deleting a book

## Technologies Used

This project leverages the MERN stack:

- MongoDB: NoSQL database for storing book information
- Express: Web application framework for Node.js
- React: JavaScript library for building user interfaces
- Node.js: JavaScript runtime for server-side code

Additional tools and libraries:

- React Router: For handling frontend routing
- Axios: For making HTTP requests from the frontend to the backend
- Mongoose: ODM library for MongoDB and Node.js
- dotenv: For managing environment variables
- cors: For handling Cross-Origin Resource Sharing

## Setup and Installation

### Frontend

1. Navigate to the frontend directory
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

### Backend

1. Navigate to the backend directory
2. Install dependencies: `npm install`
3. Set up your MongoDB connection string in a `.env` file
4. Start the server: `npm start`

Ensure MongoDB is installed and running on your system.

## API Endpoints

- GET /api/books: Retrieve all books
- GET /api/books/:id: Retrieve a specific book
- POST /api/books: Create a new book
- PUT /api/books/:id: Update a book
- DELETE /api/books/:id: Delete a book

Refer to the API documentation for more details on request/response formats.

## Contributing

Contributions to improve MERN_bookstore are welcome. Please follow the standard fork-and-pull request workflow.
