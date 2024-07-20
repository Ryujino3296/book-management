
# Book Management Store API


## Deployment

### Backend
- Note: As Render's free deployment stops the server when idle, visit this URL first to restart the backend server.
- **URL:** [https://book-managment-intern.onrender.com](https://book-managment-intern.onrender.com)

### Frontend
- **URL:** [https://book-managment-intern.netlify.app](https://book-managment-intern.netlify.app)


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


## Known Issues and Fixes

### Frontend Deployment Issues

1. **Issue: Components Not Showing in Production**
   - **Description:** When deploying the Vite React app, some components were not visible in the production build.
   - **Fix:** The issue was due to a conflict in Vite. Building the app locally with Vite and deploying it resolved the issue.

2. **Routes Not Working Correctly**
   - **Description:** When deploying directly to Netlify, some routes might not work as expected.
   - **Fix:** Ensure that the `_redirects` file in the `public` directory contains the following configuration:
     ```bash
     /* /index.html 200
     ```
     This configuration ensures that all routes are handled by the frontend application.
3. **Cookies Not Being Sent in Requests**
 - verify that cookies are being set with the `SameSite=None` and `Secure` attributes if you are using HTTPS. and remove httpOnly:true
 ### Backend Deployment Issues

1. **Database Connection**
   - **Description:** If the backend cannot connect to MongoDB Atlas, you might experience connectivity issues.
   - **Fix:** Verify that the IP whitelist includes the IP addresses of your deployment environment. Update the IP whitelist in your MongoDB Atlas cluster settings to include your deployment IPs.


### issue persist
- not able to grab cookie jwtToken, grabbing undefined in production