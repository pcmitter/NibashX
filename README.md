# 🏨 NibashX — Hotel Booking Web Application

**NibashX** is a basic hotel-booking web application developed to demonstrate the core concepts of web development, backend programming, user authentication, and application-level data handling.

The project combines an HTML-based frontend with a **Java backend** and a **Node.js-based simulated database layer**. It serves as a learning project for understanding how different technologies can work together to build a web application.

## ✨ Features

- **User Login:** Provides a login interface for users.
- **Hotel Booking Interface:** Designed around the basic hotel reservation workflow.
- **Interactive Frontend:** Uses HTML, CSS, and JavaScript to build the user interface.
- **Java Backend:** Handles application-side processing and backend operations.
- **Simulated Database:** Uses Node.js to simulate data handling instead of relying on a conventional database system.
- **Frontend–Backend Integration:** Demonstrates communication between the user interface and backend components.

*The feature list reflects the project's intended scope; individual features should be verified against the implemented code.*

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML | Webpage structure |
| CSS | Styling and layout |
| JavaScript | Frontend interactions |
| Java | Backend application logic |
| Node.js | Simulated database / data-handling layer |

## 🏗️ System Architecture

NibashX follows a layered approach that separates the user interface, backend logic, and simulated data handling.

```text
          ┌─────────────────────────┐
          │         User            │
          └────────────┬────────────┘
                       │
                       ▼
          ┌─────────────────────────┐
          │       Frontend          │
          │     HTML / CSS / JS     │
          └────────────┬────────────┘
                       │
                       ▼
          ┌─────────────────────────┐
          │      Java Backend       │
          │  Application Processing │
          └────────────┬────────────┘
                       │
                       ▼
          ┌─────────────────────────┐
          │    Node.js Layer        │
          │  Simulated Data Storage │
          └─────────────────────────┘
```

**Architecture note:** This diagram represents the architecture described for the project. The exact communication mechanism between Java and Node.js depends on the implementation.

## 🚀 Getting Started

### Prerequisites

Install the following tools before running the project:

- Java Development Kit (JDK)
- Node.js and npm
- A modern web browser
- A code editor such as Visual Studio Code or IntelliJ IDEA

### 1. Clone the Repository

```bash
git clone https://github.com/pcmitter/NibashX
```


### 2. Navigate to the Project Directory

```bash
cd NibashX
```

### 3. Start the Node.js Component

Navigate to the directory containing the Node.js application and install its dependencies, if a `package.json` file is present.

```bash
npm install
```

Start the component using the command configured in your project. For example:

```bash
node server.js
```

Replace `server.js` with the actual entry-point filename if it differs.

### 4. Start the Java Backend

Run the Java backend using the build system or execution instructions configured in your repository.

For a standalone Java application, a typical workflow is:

```bash
javac Main.java
java Main
```

Replace `Main.java` with the actual entry-point file. If the project uses Maven, Gradle, or a Java web framework, follow its corresponding startup procedure instead.

### 5. Open the Frontend

Open the project's HTML entry page in a browser or serve the frontend through the configured development server.

Ensure that the frontend, Java backend, and Node.js component are configured to communicate using the appropriate addresses and ports.

**Important:** The commands above are examples. Use the actual filenames, ports, and startup configuration present in your repository.

## 🔐 Authentication and Data Handling

The project demonstrates a basic login-oriented workflow and simulated data handling.

- The frontend collects user input.
- The Java backend is responsible for application logic.
- The Node.js component simulates the data-handling or storage layer.

A simulated database is intended for learning and demonstration. It should not be treated as production-grade persistent storage or as a substitute for a properly secured database.

For a production deployment, authentication should include secure password hashing, server-side validation, session or token management, and appropriate database security.

## 🎯 Project Objectives

The main objectives of NibashX are to:

- Understand the fundamentals of hotel-booking web applications.
- Learn how frontend and backend components interact.
- Implement backend application logic using Java.
- Explore Node.js for simulated data handling.
- Understand the separation of responsibilities between application layers.
- Gain practical experience integrating multiple web technologies.

## 🔮 Future Enhancements

Possible improvements include:

- User registration and profile management.
- Hotel search and filtering.
- Room availability checking.
- Booking confirmation and cancellation.
- Persistent database integration using MySQL, PostgreSQL, or MongoDB.
- Improved authentication and authorization.
- Responsive design for mobile devices.
- Administrative tools for managing hotels and reservations.
- Booking history and user dashboards.

## 📚 Learning Outcomes

This project provides practical exposure to:

- Frontend web development.
- Java-based backend programming.
- Node.js application development.
- Basic authentication workflows.
- Simulated data management.
- Multi-component application architecture.
- Integration between frontend and backend technologies.

## 👨‍💻 Author

**Palash Chowdhury**
