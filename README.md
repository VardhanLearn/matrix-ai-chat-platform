# Matrix AI Chat Platform (AWS EC2 + Docker + Synapse + NextJS + FAISS)

## Features
- Matrix Synapse Chat Server
- NextJS Frontend UI
- NodeJS Backend API
- NLP Service (HuggingFace embeddings + FAISS vector search)
- NGINX Reverse Proxy

---

## 1) Deploy on AWS EC2

### Launch EC2
- Ubuntu 22.04
- Open Ports: 22,80,443,8448
- Attach Elastic IP

### Install Docker + Compose

sudo apt update -y
sudo apt install -y docker.io docker-compose nginx certbot python3-certbot-nginx
sudo systemctl enable docker --now
sudo usermod -aG docker ubuntu
newgrp docker

**Clone Repo**

git clone https://github.com/<your-username>/matrix-ai-chat-platform.git
cd matrix-ai-chat-platform
cp .env.example .env

**Run Stack**

docker compose up -d
docker ps

## 2) SSL Setup

Update domain DNS:

chat.yourdomain.com -> EC2 IP

Then:

sudo certbot --nginx -d chat.yourdomain.com

## 3) Verify Services

<img width="480" height="270" alt="Screenshot from 2026-01-19 17-57-45" src="https://github.com/user-attachments/assets/0a7e0af1-27c6-4e5a-9530-8c531b6fa2e3" />



