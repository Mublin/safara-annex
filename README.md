# safara-annex
# Safara Annex - Hotel Reservation and Event Hall Booking Website

Safara Annex is a web application for managing hotel reservations and event hall bookings. The application is built using Vite and TypeScript on the frontend, and Node.js, Express, and PostgreSQL on the backend.

## Getting Started

To run this application locally, follow these steps:

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL

### Installation

1. Clone the repository from GitHub.

```bash
git clone <repository_link.git>
cd safara-annex
```

2. Install dependencies for both frontend and backend.

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Configuration

Before running the application, you need to set up the configuration.

1. **Backend Configuration**

Create a `.env` file in the `backend` directory and configure the following environment variables:

```env
PORT=4500             # The port on which the backend server will run
DATABASE_URL=postgres://<username>:<password>@localhost:5432/<database_name>  # PostgreSQL database connection URL
```

Replace `<username>`, `<password>`, and `<database_name>` with your PostgreSQL database credentials.

2. **Frontend Configuration**

Create a `.env` file in the `frontend` directory and set the following environment variables:

```env
VITE_BACKEND_URL=http://localhost:5173  # The URL of the backend server
```

### Running the Application

1. Start the backend server:

```bash
cd backend
npm start
```

2. Start the frontend development server:

```bash
cd frontend
npm run dev
```

The application will be available at `http://localhost:5173`.

## Features

- User authentication and registration
- Hotel room reservation
- Event hall booking
- Search and filtering options for hotels and event halls
- User dashboard to manage reservations and bookings
- Admin dashboard to manage hotels, event halls, and bookings

## Tech Stack

### Frontend

- Vite
- TypeScript
- React
- Axios (for handling HTTP requests)

### Backend

- Node.js
- Express
- PostgreSQL (with Sequelize as the ORM)


## Contribution Guidelines

If you want to contribute to this project, please follow the guidelines in the CONTRIBUTING.md file. Create a pull request with your proposed changes and wait for code review before merging.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

Thanks to the open-source community for providing valuable tools and libraries that made this project possible.
