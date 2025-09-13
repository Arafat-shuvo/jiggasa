# jiggasa
Project Setup Manual
This guide will help you set up the project locally and deploy it to production.
1. Clone the Repository
Run the following commands to clone the repository and navigate to the project folder:
git clone https://github.com/Arafat-shuvo/jiggasa.git
cd jiggasa
2. Backend Setup (Server)
Follow the steps below to set up the backend server:
Step 1: Navigate to the server folder
cd server
Step 2: Install dependencies
npm install
Step 3: Create .env file
Create a `.env` file inside the `server` directory and add the following content:
MONGODB_URI=mongodb+srv://u25:u25@cluster0.urljx0d.mongodb.net/uproject?retryWrites=true&w=majorityGEMINI_API_KEY=AIzaSyAehPiSlaGCrxeAZmTXbv_IORCEFLWTGoM
PORT=5000
CLOUDINARY_CLOUD_NAME=dgrcovlju
CLOUDINARY_API_KEY=621137513697598
CLOUDINARY_SECRET_KEY=JZjFHJgjjd1TjDJA31Gyzo8wZIs
Step 4: Run the server
Development Mode (with auto restart using nodemon):
npm run dev
Production Mode:
npm start
3. Frontend Setup (React + Tailwind CSS)
Follow the steps below to set up the frontend React application:
Step 1: Navigate to the frontend folder
cd frontend
Step 2: Install dependencies
npm install
Step 3: Create .env file
Create a `.env` file inside the `frontend` directory and add the following content:
# For Production
VITE_API_BASE_URL=https://u-project.onrender.com/api
# For Development
VITE_API_BASE_URL=http://localhost:5000/api
VITE_ADMIN_USER=admin
VITE_ADMIN_PASS=123
Step 4: Run the frontend
npm run dev
4. Build & Deploy
Backend Deployment: Deploy the backend to Render as a Web Service.
Frontend Deployment:
1. Build the frontend:
 npm run build
2. Deploy the `dist` folder to Render as a Static Site




Frontend: React, Vite, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB (Atlas)
Image Hosting: Cloudinary
Deployment: Render
