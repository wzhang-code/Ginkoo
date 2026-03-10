#!/bin/bash

# 启动Ginkoo.org网站
# 同时启动前端和后端服务

# 安装前端依赖
echo "Installing frontend dependencies..."
cd frontend
npm install

# 启动后端服务
cd ../backend
echo "Installing backend dependencies..."
npm install
echo "Starting backend server..."
node src/index.js &
BACKEND_PID=$!

# 返回前端目录启动前端
cd ../frontend
echo "Starting frontend server..."
npm run dev
