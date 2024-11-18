# Dockerfile
FROM node:18

# Cài đặt các công cụ cần thiết
RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    && rm -rf /var/lib/apt/lists/*

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép package.json và cài đặt các phụ thuộc
COPY package*.json ./
RUN npm install
RUN npm rebuild bcryptjs --build-from-source

# Sao chép mã nguồn vào container
COPY . .

# Khởi động ứng dụng
CMD ["nodemon", "server.js"]