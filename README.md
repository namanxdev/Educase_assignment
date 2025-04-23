# 🏫 School Management API

A simple REST API built with **Node.js**, **Express**, **Prisma**, and **MySQL** to manage schools and list them based on proximity. Deployed using **Railway**.

---
## 🧪 Testing Link
```arduino
Base Link : https://educase-assignment-1lov.onrender.com
otherLinks
1: addschool: https://educase-assignment-1lov.onrender.com/addSchool (Method: Post)

2:listSchool:https://educase-assignment-1lov.onrender.com/listSchools?latitude=40.7000&longitude=-74.0000 (Method:Get)
```

## 🧰 Tech Stack

- **Backend:** Node.js + Express.js  
- **ORM:** Prisma  
- **Database:** MySQL (Hosted on Railway)  
- **Deployment:** Railway

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/school-api.git
cd school-api
```

### 2️⃣ Install Dependencies

```npm install```

### 3️⃣ Configure Environment Variables
Create a .env file in the root directory and add your database connection string:

#### env
```DATABASE_URL="mysql://username:password@host:port/dbname"```
💡 Use the connection string from Railway’s MySQL instance.

## 📡 API Endpoints

## ➕ Add a New School
URL: /addSchool

Method: POST

Request Body:

``` json
Edit
{
  "name": "Example School",
  "address": "123 Main St",
  "latitude": 28.6139,
  "longitude": 77.2090
}
```
Response:

``` json
{
  "id": 1,
  "name": "Example School",
  "address": "123 Main St",
  "latitude": 28.6139,
  "longitude": 77.2090,
  "createdAt": "2025-04-21T10:00:00Z",
  "updatedAt": "2025-04-21T10:00:00Z"
}
```
## 📍 Get Schools Sorted by Proximity
#### URL: /listSchools


### Method: GET

Query Parameters:

latitude: User's current latitude

longitude: User's current longitude

Example:
```
/listSchools?latitude=28.61&longitude=77.20
```
### Response:

``` json
[
  {
    "id": 2,
    "name": "Nearby School",
    "address": "456 Street",
    "latitude": 28.60,
    "longitude": 77.19,
    "distance": 1.24
  },
  
]
```

# ⚙️ Deployment on Railway
Push your project to GitHub.

Go to Railway and create a new project.

Select Deploy from GitHub repo.

Add your environment variable DATABASE_URL in the Railway dashboard.

Run the following Prisma commands on Railway’s shell:

bash
Copy
Edit
npx prisma generate
npx prisma migrate deploy
🎉 Your API is live at:

```arduino

https://your-app.up.railway.app

```

## 📁 Folder Structure
``` 

school-api/
├── prisma/
│   └── schema.prisma
├── routes/
│   └── schoolRoutes.js
├── controllers/
│   └── schoolController.js
├── src/
│   └── index.js
├── .env
├── package.json

```
🧪 Postman Collection
Test your endpoints easily with Postman.

## 🔗 Download Collection 
```
https://www.postman.com/naman411/school-api/collection/53dr7e3/school-api?action=share&creator=39823841
```

```

💡 Notes
Uses Haversine Formula to calculate distances between coordinates.

Add CORS middleware if integrating with a frontend.

Validations and error handling included.

```

