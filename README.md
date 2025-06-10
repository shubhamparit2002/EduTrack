
# EduTrack 🎓 – Student Management System

A full-stack web application built with Angular and Spring Boot to manage student records using CRUD operations. This system allows users to add, update, delete, and view student details — including fetching student information by ID.



## 🚀 Technologies Used

- **Frontend:** Angular
- **Backend:** Spring Boot, Spring Data JPA  
- **Database:** MySQL
- **Tools:** Postman, Spring Tool Suite (STS), VS Code 



## 🔑 Features

- ➕ Add new student
- 📋 View all students
- 🔄 Update student details
- ❌ Delete student by ID
- 🔍 Get student by ID (search functionality)



## 🗂 Project Structure

EduTrack/
├── backend/ (Spring Boot)
│ ├── controller/
│ ├── service/
│ ├── repository/
│ └── entity/
├── frontend/ (Angular)
│ ├── components/
│ ├── services/
│ └── models/


## 🛠️ Getting Started

### Backend Setup (Spring Boot)
1. Import the project in Spring Tool Suite (STS).
2. Configure MySQL DB in `application.properties`:
spring.datasource.url=jdbc:mysql://localhost:3306/student_db
spring.datasource.username=root
spring.datasource.password=your_password


3. Run the application using:

mvn spring-boot:run
Frontend Setup (Angular)
Open the frontend folder in VS Code

Install dependencies:
npm install
Run the Angular app:

ng serve
Visit: http://localhost:4200

📷 Screenshots
(Add screenshots of your UI here, like the table view, add form, and search by ID form)

🧠 What I Learned
Built a complete CRUD app with Angular and Spring Boot

Designed REST APIs and connected them to Angular using HttpClient

Worked with MySQL and Spring Data JPA

Implemented dynamic data fetching (e.g., Get by ID)

📎 License
This project is open-source and free to use.
