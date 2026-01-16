#!/usr/bin/env bash

# ╔══════════════════════════════════════════════════════════════╗
# ║                    Express Redis Starter                     ║
# ╚══════════════════════════════════════════════════════════════╝
# Express.js backend with Redis for caching, sessions,
# rate limiting, and performance optimization.


# ──────────────────────────────────────────────────────────────
# FEATURES
# ──────────────────────────────────────────────────────────────
# • Redis caching for APIs
# • Cache invalidation
# • Redis-backed sessions
# • Distributed rate limiting
# • Clean Express architecture


# ──────────────────────────────────────────────────────────────
# TECH STACK
# ──────────────────────────────────────────────────────────────
# Node.js | Express.js | Redis
# MongoDB / PostgreSQL (optional)
# dotenv | ioredis | express-rate-limit


# ──────────────────────────────────────────────────────────────
# PROJECT STRUCTURE
# ──────────────────────────────────────────────────────────────
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


# ──────────────────────────────────────────────────────────────
# GETTING STARTED
# ──────────────────────────────────────────────────────────────

# Clone repository
git clone https://github.com/your-username/express-redis-starter.git
cd express-redis-starter

# Install dependencies
npm install

# Setup environment
cp .env.example .env

# Environment variables
PORT=5000
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# Start Redis (Docker)
docker run -d -p 6379:6379 redis

# Or start Redis locally
redis-server

# Run server
npm run dev

# Application URL
http://localhost:5000
