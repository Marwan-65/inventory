# Inventory Storage System

This is a simple storage system that implements the following features:
#### Password Hashing
 - Using bcrypt and the salting technique, the password is hashed before being safely stored in the database.
#### Form Validation
 - The system makes sure that the user has entered the correct data types and double checks the password when registering.
#### User Input
 - Allows the user to make changes to the database as Add, Edit and Delete Items
 

## Project Setup

 1. Clone the project repository from GitHub
 2. Install dependencies 
	 ```
	npm install
	```
 3. Run the app
	 ```
	cd server
	npm run dev
	```
	```
	cd frontend
	npm run dev
	```
 4. Create a MySql database with the following tables : users (Username,Password,Role,Email) , items (id, name, type, cat, quantity, purity,weight,material,dimension,voltage,current,power)
 5. Create a file named `.env` in the "server" directory and write your own values for the Database information:
	 ```
	 DB_HOST
	 DB_USER
	 DB_PASSWORD
	 DB_DATANAME
	 ```


## Technology Stack
**Front-End:**

-   Framework: React (version 18.3.1)
-   Styling: Raw CSS
-   JavaScript Libraries: React Router DOM

**Back-End:**

-   Framework: Nodejs (v21.4.0)
-   Database: MySQL



## Code Structure & Design Decisions

**Project Structure:**

The project is organized into the following main directories:
-   `server`: Contains the server and all the backend logic
-   `frontend`: Contains the `src` directory which holds all the frontend components and classes, and the `public` directory which holds the logos and the favicon.

**Key Design Decisions:**

-   I chose React for the frontend due to its component-based architecture and ease of managing complex UIs (although this one isn't as complex).
-   For the backend, I used Nodejs for its many accessible packages through npm and as it also uses JS so I won't have to toggle between languages .I also used MySql mainly for its ease and familiarity.


## Assumptions & Limitations

**Assumptions:**

-   I assume that the user has basic knowledge on how to input his information and can modify it when he gets a validation message for his wrong input.
-   The project is currently built with modern browsers in mind but might not be compatible with older versions.

**Limitations:**

-   The current implementation focuses on core functionalities and might lack some advanced features like user roles.
-   The chosen database solution might not be suitable for handling millions of users in the future.

**Future Improvements:**
- In a future iteration, there might be a permission-based authorization and a dashboard with more features.
- A retouch to the UI to make it more engaging and sophisticated.



