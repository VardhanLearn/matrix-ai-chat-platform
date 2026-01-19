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

```bash
sudo apt update -y
sudo apt install -y docker.io docker-compose nginx certbot python3-certbot-nginx
sudo systemctl enable docker --now
sudo usermod -aG docker ubuntu
newgrp docker

**Clone Repo**


