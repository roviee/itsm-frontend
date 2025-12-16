# ITSM – Frontend (React)

This repository contains the **frontend application** for a Ticket Management System inspired by ServiceNow.  
It is built using **React** and communicates with a backend REST API to manage tickets, users, and role-based workflows.

 **Backend Repository:**  
🔗 https://github.com/roviee/itsm-backend

---

## Project Overview

The frontend provides a clean and responsive user interface for managing support tickets across different roles:

- **Employee** – Create and track support tickets  
- **Support Staff** – View and update assigned tickets  
- **Admin** – View all tickets, assign staff, and manage priorities  

The focus of this project is **React fundamentals**, **API integration**, and **role-based UI behavior**.

---

## Features

### Authentication
- JWT-based login
- Role-based protected routes
- Secure API requests using access tokens

### Ticket Management
- Create tickets
- View ticket lists and ticket details
- Update ticket status (Support Staff / Admin)
- Assign tickets to staff (Admin only)

###  Role-Based Dashboards
- Employee dashboard: personal tickets
- Support Staff dashboard: assigned tickets
- Admin dashboard: all tickets overview

### UI / UX
- Sidebar navigation
- Reusable components (tables, forms, modals)
- Loading and error handling states
- Responsive layout

---

## Tech Stack

- **React**
- **React Router**
- **Axios / Fetch API**
- **CSS / Bootstrap / Styled Components**
- **JWT Authentication**

---

## Demo

### Login Page
![Login Page](src/assets/styles/screenshots/Screenshot%202025-12-06%20192221.png)

### Employee Dashboard
![Dashboard page](src/assets/styles/screenshots/Screenshot%202025-12-06%20192458.png)

### Staff Dashboard
![Dashboard page](src/assets/styles/screenshots/Screenshot%202025-12-17%20024308.png)

### Create Ticket (Employee)
![Create Page](src/assets/styles/screenshots/Screenshot%202025-12-06%20192532.png)

### Admin Dashboard
![Dashboard page](src/assets/styles/screenshots/Screenshot%202025-12-06%20192328.png)

### Ticket List (Admin)
![TicketList page](src/assets/styles/screenshots/Screenshot%202025-12-06%20192343.png)

### Ticket Details
![TicketList page](src/assets/styles/screenshots/Screenshot%202025-12-06%20192401.png)
