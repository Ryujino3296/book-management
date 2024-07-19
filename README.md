
# Book Management Store API

## Overview

The Book Management Store API is a full-stack application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This project provides a robust backend API for managing a bookstore, complete with authentication, data validation, and notifications.

## Features

- **CRUD Operations**: Create, read, update, and delete books.
- **Authentication**: Secure endpoints for creating, updating, and deleting books.
- **Frontend**: React-based interface with routing, state management, and notifications.
- **Notifications**: Toastify for user notifications.
- **Token Management**: JWT for authentication; auto-login with `js-cookie`.
- **Data Validation**: Joi for validating server-side data.
- **Email Notifications**: Nodemailer for sending emails.
- **Error Handling**: Proper error responses and HTTP status codes.
- **CORS Handling**: CORS for managing cross-origin requests.

## Technologies Used

- **Frontend**: React.js, React Router DOM, Context API, Toastify, Axios, js-cookie
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt, Nodemailer, Joi, cookie-parser, morgan

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/amul69906995/book-managment-intern.git
   cd book-managment-intern
   cd backend
   npm install
   cd ../frontend
   npm install
   cd backend
   npm start
   cd ../frontend
   npm start
## Backend env
- MONGO_URI=??
- PORT=8000
- JWT_SECRET=??
- GMAIL_PASS=??
- GMAIL_USER=??
- GMAIL_PORT=465
- FRONTEND_URL=http://localhost:5173

## Frontend env
- VITE_BACKEND_URL=http://localhost:8000