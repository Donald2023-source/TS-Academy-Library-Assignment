📚 TS-ACADEMY-LIBRARY-ASSIGNMENT

Empowering Knowledge, Transforming Libraries with Innovation

🚀 Overview

TS-Academy-Library-Assignment is a backend system for managing a digital library.
It allows administrators to manage books, authors, students, and borrowing activities using a structured REST API.

✨ Features

📚 Book management (Create, Read, Update, Delete)
 
✍️ Author management

👨‍🎓 Student tracking

🧑‍💼 Attendant management

🔄 Borrow & return system

🔗 MongoDB relationships using Mongoose populate

⚡ RESTful API architecture

🏗️ Project Structure

TS-Academy-Library-Assignment/

│
├── controllers/ # Business logic

├── models/ # Mongoose schemas

├── routes/ # API routes

├── config/ # DB connection

├── .env # Environment variables

├── index.js # Entry point

└── package.json

⚙️ Getting Started

📌 Prerequisites
Node.js
npm
MongoDB (local or cloud e.g. Atlas)

POSTMAN LINK - https://speeding-zodiac-673766.postman.co/workspace/LIBRARY-MANAGER~174fa481-f398-442d-9776-f60e6e10da20/collection/44727897-0f8ddff2-36c4-45dd-9131-6561d55ec2a9?action=share&creator=44727897

📦 Installation
git clone https://github.com/Donald2023-source/TS-Academy-Library-Assignment

cd TS-Academy-Library-Assignment

npm install

🔐 Environment Variables

Create a .env file:

PORT=8000
MONGO_URI=your_mongodb_connection_string

▶️ Run the Server
npm start

Server runs on:

http://localhost:8000

🔗 API Endpoints

📚 Books

Method Endpoint Description

POST /api/books Create a book

GET /api/books Get all books

GET /api/books/:id Get single book

PUT /api/books/:id Update 


DELETE /api/books/:id Delete book

✍️ Authors

Method Endpoint

POST /api/authors

GET /api/authors

👨‍🎓 Students


Method Endpoint

POST /api/students

GET /api/students

📥 Sample Request


➕ Create Book
{
    
"title": "Things Fall Apart",   
"isbn": "123456789",    
"authors": ["AUTHOR_ID_HERE"],  
"issuedBy": "ATTENDANT_ID_HERE" 
}   

📤 Sample Response

{
"message": "New book created successfully!",        
"data": {       
"\_id": "book_id",  
"title": "Things Fall Apart",   
"isbn": "123456789",    
"authors": [    
{   
"_id": "author_id", 
"name": "Chinua Achebe" 
}   
],  
"status": "IN"  
}   
}   


🛠️ Tech Stack   
Node.js  
Express.js        
MongoDB  
Mongoose    
dotenv  
Nodemon