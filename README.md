# 🛒 E-Shop

### Multi-Vendor MERN Stack E-Commerce Marketplace

E-Shop is a full-stack multi-vendor e-commerce platform built with the MERN stack (MongoDB, Express.js, React, Node.js). The platform allows buyers, sellers, and administrators to interact through a unified marketplace featuring product management, real-time messaging, secure payments, order tracking, and role-based dashboards.

Inspired by marketplace platforms such as Amazon and Daraz, E-Shop demonstrates scalable architecture, modern authentication practices, cloud-based media handling, and real-world e-commerce workflows.

---

## ✨ Features

### 👤 Buyer Features

- User registration and authentication
- Product browsing and searching
- Category and price filtering
- Wishlist management
- Shopping cart functionality
- Secure checkout
- Stripe and PayPal payments
- Order tracking
- Real-time seller communication
- Profile and address management

### 🏪 Seller Features

- Separate seller registration and login
- Product management
- Flash sale / event management
- Order fulfillment workflow
- Sales and earnings dashboard
- Customer messaging
- Withdrawal request system

### 🛡️ Admin Features

- Platform-wide management dashboard
- User management
- Seller management
- Product moderation
- Order monitoring
- Withdrawal approval workflow

### 💬 Real-Time Messaging

- Buyer ↔ Seller chat
- Online user tracking
- Read receipts
- Instant conversation updates
- Socket.IO powered communication

### 💳 Payment Processing

- Stripe integration
- PayPal integration
- Secure payment handling
- PCI-conscious payment flow

---

## 🏗️ Architecture

The application follows a multi-service architecture:

```text
Frontend (React)
       │
       ▼
Express REST API
       │
       ▼
MongoDB Atlas

Socket.IO Server
       │
       ▼
Real-Time Messaging

Cloudinary
       │
       ▼
Media Storage & CDN
```

---

## 🚀 Tech Stack

### Frontend

- React 18
- React Router DOM
- Redux Toolkit
- Redux Thunk
- Axios
- Tailwind CSS
- Material UI
- Socket.IO Client
- React Toastify

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Bcrypt
- Cookie Parser
- Nodemailer
- Cloudinary

### Payments

- Stripe
- PayPal

### Real-Time

- Socket.IO

### Deployment

- Vercel
- MongoDB Atlas
- Cloudinary

---

## 🔐 Authentication & Authorization

E-Shop uses a role-based authentication system:

### Buyer

- JWT Cookie Authentication
- Protected Routes
- Profile Management

### Seller

- Separate seller authentication
- Dedicated seller token
- Seller dashboard protection

### Admin

- Role-based access control
- Administrative route protection

---

## 📦 Core Modules

### User Module

- Registration
- Login
- Profile Management
- Address Management

### Product Module

- Product CRUD
- Reviews
- Categories
- Search & Filtering

### Order Module

- Checkout
- Order Tracking
- Order Status Updates

### Shop Module

- Seller Management
- Shop Profiles
- Store Analytics

### Messaging Module

- Conversations
- Real-Time Messaging
- Read Receipts

### Payment Module

- Stripe Payments
- PayPal Payments
- Payment Verification

---

## 📁 Project Structure

```text
E-Shop/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controller/
│   ├── middleware/
│   ├── model/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
├── socket/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Environment Variables

### Backend

Create a `.env` file inside the backend folder:

```env
PORT=8000

DB_URL=your_mongodb_connection_string

JWT_SECRET_KEY=your_jwt_secret

ACTIVATION_SECRET=your_activation_secret

STRIPE_SECRET_KEY=your_stripe_secret

PAYPAL_CLIENT_ID=your_paypal_client_id

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

---

## 🔧 Installation

### Clone Repository

```bash
git clone https://github.com/Itsmahnor/E-Shop.git
cd E-Shop
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

### Socket Server Setup

```bash
cd socket
npm install
npm start
```

---

## 🌟 Highlights

- Multi-vendor marketplace architecture
- Real-time buyer-seller communication
- Stripe & PayPal integration
- JWT-based authentication
- Role-based access control
- Cloudinary media management
- Redux state management
- Responsive UI
- Modular backend architecture

---

## 📚 Learning Outcomes

This project demonstrates:

- Full-stack MERN development
- Scalable REST API design
- Authentication & authorization
- Real-time application development
- Payment gateway integration
- State management with Redux Toolkit
- Cloud media handling
- Marketplace business logic implementation

---

## 👩‍💻 Author

**Mahnoor Sarfraz**

Frontend / React Native Developer

GitHub: https://github.com/Itsmahnor

---

## ⭐ Support

If you found this project helpful, consider giving it a star on GitHub.