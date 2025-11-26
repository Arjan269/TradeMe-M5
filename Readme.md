# TradeMe Mission 5 - Auction API

A Node.js REST API backend for an auction platform built with Express, MongoDB, and Mongoose.

## 📋 Project Overview

This project provides a backend API for managing and searching auction listings. It features case-insensitive keyword search functionality and is designed to work with MongoDB as the database.

## 🏗️ Project Structure

```
Mission-5/
├── Readme.md                 # Project documentation
├── backend/
│   ├── index.js             # Main server entry point
│   ├── package.json         # Project dependencies
│   ├── seed-data.json       # Sample auction data
│   ├── seed.js              # Database seeding script
│   ├── controllers/
│   │   └── auctionController.js    # Business logic for auctions
│   ├── models/
│   │   └── Auction.js              # MongoDB auction schema
│   └── routes/
│       └── api.js                  # API route definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally on port 27017)
- npm or yarn

### Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

### Running the Server

Start the Express server:
```bash
node index.js
```

The server will run on **http://localhost:3000** and connect to MongoDB at `mongodb://127.0.0.1:27017/auctiondb`.

### Seeding the Database

Populate the database with sample data:
```bash
node seed.js
```

## 📦 Dependencies

- **express** (^5.1.0) - Web framework for building the REST API
- **mongoose** (^9.0.0) - MongoDB object modeling tool
- **cors** (^2.8.5) - Middleware for handling cross-origin requests

## 🔌 API Endpoints

### Search Auctions

Search for auctions by keyword in the title.

**Endpoint:**
```
GET /api/search?keyword=<search_term>
```

**Query Parameters:**
- `keyword` (required) - The search term to filter auction titles

**Response:**
```json
[
  {
    "_id": "63f7d4a1b3c2e1f5a6b8c9d0",
    "title": "Vintage Laptop",
    "description": "Well-maintained laptop from 2015",
    "start_price": 150,
    "reserve_price": 200
  }
]
```

**Error Responses:**
- `400 Bad Request` - Missing keyword parameter
- `500 Internal Server Error` - Server error

**Example:**
```bash
curl "http://localhost:3000/api/search?keyword=laptop"
```

## 📊 Database Schema

### Auction Model

```javascript
{
  title: String,           // Auction item title
  description: String,     // Detailed description
  start_price: Number,     // Starting bid price
  reserve_price: Number    // Minimum acceptable price
}
```

## 🔍 Features

- ✅ Case-insensitive auction search by title
- ✅ MongoDB integration with Mongoose ODM
- ✅ CORS enabled for cross-origin requests
- ✅ RESTful API design
- ✅ Error handling and validation

## 🛠️ Development

To modify the API:

1. Update models in `backend/models/`
2. Add business logic in `backend/controllers/`
3. Define routes in `backend/routes/`
4. Restart the server to apply changes

## 📝 License

ISC

## 👤 Author

Arjan269
