# Auth Cloud API

## Distributed Authentication Platform using JWT, PostgreSQL, Docker and Cloud Computing

### Overview

Auth Cloud API is a RESTful authentication service developed using Node.js, Express, Prisma ORM and PostgreSQL. The solution provides centralized user authentication and authorization through JSON Web Tokens (JWT), following modern software engineering, DevOps and cloud computing practices.

The project was designed to demonstrate the practical application of concepts related to:

* DevOps
* Cloud Computing
* Distributed Systems
* Containerization
* REST API Development
* Secure Authentication
* Infrastructure Automation
* Version Control
* Continuous Delivery

The application is deployed in a cloud environment using Render and connected to a PostgreSQL database hosted on Supabase.

---

# Table of Contents

1. Project Objectives
2. Solution Architecture
3. Technology Stack
4. System Components
5. Security Model
6. API Documentation
7. Deployment Architecture
8. Installation Guide
9. Docker Execution
10. Environment Configuration
11. API Endpoints
12. Authentication Flow
13. Testing Procedures
14. DevOps Practices Applied
15. Current Limitations
16. Future Improvements
17. Authors

---

# Project Objectives

The primary objective of the project is to provide a centralized authentication service capable of supporting web applications, mobile applications and distributed systems.

The platform currently provides:

* User registration
* User authentication
* JWT token generation
* Authenticated profile retrieval
* Password change functionality
* Interactive API documentation

The project was also developed as a practical implementation of DevOps and cloud-native concepts.

---

# Solution Architecture

## Logical Architecture

```text
Client
   │
   ▼
HTTP / HTTPS
   │
   ▼
Express Routes
   │
   ▼
Controllers
   │
   ▼
Services
   │
   ▼
Prisma ORM
   │
   ▼
PostgreSQL
```

---

## Physical Architecture

```text
Client
   │
   ▼
Render Cloud Service
   │
   ▼
Docker Container
   │
   ▼
Node.js Application
   │
   ▼
Prisma ORM
   │
   ▼
Supabase PostgreSQL
```

---

## DevOps Architecture

```text
Developer
   │
   ▼
Git
   │
   ▼
GitHub Repository
   │
   ▼
Render Deployment
   │
   ▼
Docker Build
   │
   ▼
Production Environment
```

---

# Technology Stack

## Backend

* Node.js
* Express.js

## Database

* PostgreSQL
* Supabase

## Data Access Layer

* Prisma ORM

## Authentication and Security

* JSON Web Token (JWT)
* Bcrypt

## Documentation

* Swagger
* Swagger UI Express

## DevOps and Deployment

* Git
* GitHub
* Docker
* Render

---

# System Components

## Express

Responsible for handling HTTP requests, route definitions and middleware execution.

## Controllers

Controllers receive requests, create DTOs, invoke business services and return HTTP responses.

## Services

Business rules are centralized in service classes, ensuring separation of concerns and maintainability.

## Prisma ORM

Prisma is responsible for communication between the application and PostgreSQL.

Benefits include:

* Query abstraction
* Migration management
* Improved maintainability
* Reduced risk of SQL-related errors

## PostgreSQL

The application uses PostgreSQL as the primary relational database system.

---

# Security Model

Security considerations were incorporated throughout the entire project lifecycle.

## Password Protection

User passwords are never stored in plain text.

The application uses bcrypt hashing:

```text
Password
   │
   ▼
Bcrypt Hash
   │
   ▼
Database Storage
```

---

## Authentication

Authentication is implemented through JSON Web Tokens.

Upon successful login:

```text
Credentials
   │
   ▼
Validation
   │
   ▼
JWT Generation
   │
   ▼
Token Delivery
```

Protected endpoints require:

```http
Authorization: Bearer TOKEN
```

---

## Environment Variables

Sensitive configuration values are not stored in source code.

Examples:

```env
DATABASE_URL=
JWT_SECRET=
```

---

## HTTPS

Production traffic is encrypted using HTTPS provided by Render.

---

# API Documentation

Interactive API documentation is available through Swagger.

Production URL:

```text
/api-docs
```

The documentation allows:

* Endpoint visualization
* Request execution
* Response inspection
* Authentication testing

---

# Production Environment

Application URL:

```text
https://auth-cloud-api.onrender.com
```

API Documentation:

```text
https://auth-cloud-api.onrender.com/api-docs
```

The production environment consists of:

* Render for application hosting
* Docker container execution
* Supabase PostgreSQL database
* HTTPS encryption

---

# Installation Guide

## Clone Repository

```bash
git clone https://github.com/otavio-wenzel/auth-cloud-api.git
```

```bash
cd auth-cloud-api
```

---

## Install Dependencies

```bash
npm install
```

---

## Environment Configuration

Create a file named:

```text
.env
```

Example:

```env
PORT=3000

DATABASE_URL=postgresql://user:password@host:5432/database

JWT_SECRET=your_secret_key
```

---

## Run Application

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

---

# Docker Execution

## Build Image

```bash
docker build -t auth-cloud-api .
```

## Run Container

```bash
docker run \
-p 3000:3000 \
-e DATABASE_URL=YOUR_DATABASE_URL \
-e JWT_SECRET=YOUR_SECRET \
auth-cloud-api
```

---

# API Endpoints

| Method | Endpoint              | Description                |
| ------ | --------------------- | -------------------------- |
| GET    | /health               | Service health check       |
| POST   | /auth/register        | User registration          |
| POST   | /auth/login           | User authentication        |
| GET    | /auth/profile         | Authenticated user profile |
| PUT    | /auth/change-password | Password update            |

---

# Authentication Flow

```text
User
   │
   ▼
POST /auth/login
   │
   ▼
Credential Validation
   │
   ▼
JWT Generation
   │
   ▼
Token Delivery
   │
   ▼
Protected Requests
```

---

# Testing Procedures

Testing was performed using:

* Swagger UI
* Postman
* Local Environment
* Docker Containers
* Production Environment

Validated scenarios:

* Health Check
* User Registration
* Duplicate Registration
* Valid Authentication
* Invalid Authentication
* Protected Route Access
* Password Change
* Database Integration
* Docker Execution
* Production Deployment

---

# DevOps Practices Applied

## Version Control

Git and GitHub were used to manage source code versions.

## Branch Strategy

```text
main
 └── Production

dev
 └── Development
```

## Containerization

Docker ensures environment consistency and portability.

## Continuous Delivery

Render automatically deploys updates from the GitHub repository.

## Distributed Architecture

Application and database are deployed as independent services.

## Cloud Computing

All major infrastructure components operate in cloud environments.

---

# Current Limitations

The current version does not include:

* Refresh Tokens
* Multi-Factor Authentication
* OAuth2 Integration
* Password Recovery by Email
* Rate Limiting
* Audit Logging

---

# Future Improvements

Potential future enhancements include:

* OAuth2 Authentication
* Social Login
* Multi-Factor Authentication
* Kubernetes Deployment
* Observability Stack
* CI/CD Pipelines
* Monitoring and Alerting
* Audit Trails

---

# Authors

Developed as a practical project for DevOps and Cloud Computing studies.

Repository:

```text
https://github.com/otavio-wenzel/auth-cloud-api
```

---

# License

This project was developed for educational and academic purposes.