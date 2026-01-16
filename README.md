#!/usr/bin/env bash

# ==============================================================
# Express Redis Starter
# ==============================================================
# Express.js backend with Redis for caching, sessions,
# rate limiting, and performance optimization.
# ==============================================================


# --------------------
# Features
# --------------------
# Redis caching
# Cache invalidation
# Redis sessions
# Rate limiting
# Modular Express structure


# --------------------
# Tech Stack
# --------------------
# Node.js
# Express.js
# Redis
# MongoDB / PostgreSQL (optional)
# dotenv
# ioredis
# express-rate-limit


# --------------------
# Project Structure
# --------------------
# express-redis-starter/
# ├── src/
# │   ├── config/
# │   │   ├── redis.js
# │   │   └── db.js
# │   ├── controllers/
# │   ├── routes/
# │   ├── middlewares/
# │   │   ├── cache.middleware.js
# │   │   └── rateLimiter.middleware.js
# │   └── app.js
# ├── .env.example
# ├── .gitignore
# ├── package.json
# ├── server.js
# └── README.md


# --------------------
# Getting Started
# --------------------

# Clone repository
git clone https://github.com/your-username/express-redis-starter.git
cd express-redis-starter

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# .env
PORT=5000
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# Start Redis (Docker)
docker run -d -p 6379:6379 redis

# OR start Redis locally
redis-server

# Start server
npm run dev

# Application URL
http://localhost:5000
