#!/usr/bin/env bash

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║                    Express Redis Starter                     ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo
echo "Express.js backend with Redis for caching, sessions,"
echo "rate limiting, and performance optimization."
echo

echo "──────────────────────────────────────────────────────────────"
echo "FEATURES"
echo "──────────────────────────────────────────────────────────────"
echo "• Redis caching for APIs"
echo "• Cache invalidation"
echo "• Redis-backed sessions"
echo "• Distributed rate limiting"
echo "• Clean Express architecture"
echo

echo "──────────────────────────────────────────────────────────────"
echo "TECH STACK"
echo "──────────────────────────────────────────────────────────────"
echo "Node.js | Express.js | Redis"
echo "MongoDB / PostgreSQL (optional)"
echo "dotenv | ioredis | express-rate-limit"
echo

echo "──────────────────────────────────────────────────────────────"
echo "PROJECT STRUCTURE"
echo "──────────────────────────────────────────────────────────────"
echo "express-redis-starter/"
echo "├── src/"
echo "│   ├── config/"
echo "│   │   ├── redis.js"
echo "│   │   └── db.js"
echo "│   ├── controllers/"
echo "│   ├── routes/"
echo "│   ├── middlewares/"
echo "│   │   ├── cache.middleware.js"
echo "│   │   └── rateLimiter.middleware.js"
echo "│   └── app.js"
echo "├── .env.example"
echo "├── .gitignore"
echo "├── package.json"
echo "├── server.js"
echo "└── README.md"
echo

echo "──────────────────────────────────────────────────────────────"
echo "GETTING STARTED"
echo "──────────────────────────────────────────────────────────────"
echo
echo "git clone https://github.com/your-username/express-redis-starter.git"
echo "cd express-redis-starter"
echo
echo "npm install"
echo
echo "cp .env.example .env"
echo
echo "PORT=5000"
echo "REDIS_HOST=localhost"
echo "REDIS_PORT=6379"
echo "REDIS_PASSWORD="
echo
echo "docker run -d -p 6379:6379 redis"
echo "or"
echo "redis-server"
echo
echo "npm run dev"
echo
echo "Application running at:"
echo "http://localhost:5000"
