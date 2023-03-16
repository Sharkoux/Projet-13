## Projet 13: Use an API for a bank user account with React

1. For this project, we have developed a user authentication system for a banking platform, using redux for global states and the ability to log in, 
log out, register and modify the user profile.

2. And set up a document describing the APIs for the transaction part following the swagger guidelines.

## Setup

  Clone git: https://github.com/Sharkoux/Projet-13.git
  
  
## How to launch application locally?
!! MongoDB and NodeJs required !!

  Back-end:
   cd back-end
   npm install
   npm run dev:server
   npm run populate-db
  
  Front-end: 
   cd front-end
   cd argent-bank
   npm install
   npm start
   
 ## Back-end endpoint and swagger for Auth
 
  -Endpoint: http://localhost:3001/api/v1/user
  -Swagger: http://localhost:3001/api-docs
  
  User database after populate-db : 
   
  Tony Stark: 
      First Name: Tony
      Last Name: Stark
      Email: tony@stark.com
      Password: password123
  
  Steve Rogers:
      First Name: Steve,
      Last Name: Rogers,
      Email: steve@rogers.com,
      Password: password456
 ## Front-End     
  
   url: http://localhost:3000
