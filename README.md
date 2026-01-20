# Matrix AI Chat Platform (Full Stack) 🚀
A production-style full-stack chat system deployed using Docker on AWS EC2.

<img width="1074" height="714" alt="Screenshot from 2026-01-20 16-16-09" src="https://github.com/user-attachments/assets/61cb77b6-9f8e-4351-8d2e-b944ee5b87f0" />



This project proves hands-on skills in:
- Docker & Linux
- AWS EC2 deployment
- Matrix Synapse server setup
- Bridge integration (extensible)
- React / NextJS frontend
- Backend API integration
- NLP Search service (HuggingFace + FAISS)

---

## 📌 Project Overview
This project deploys a full-stack architecture where:

✅ Matrix Synapse works as the chat server  
✅ NextJS provides a simple web UI frontend  
✅ NodeJS backend provides APIs  
✅ Python NLP service provides embedding/search endpoint  
✅ PostgreSQL stores Synapse data  
✅ Everything runs inside Docker containers using Docker Compose  
✅ Can be deployed with:
- **EC2 Public IP (testing)** OR
- **Domain + NGINX + SSL (production)**

---

## 🏗️ Architecture

User Browser
|
|--> NextJS Frontend (3000)
|--> Backend API (5000)
|--> NLP Service (7000)
|
Docker Compose on AWS EC2
|
|--> Synapse (8008)
|--> PostgreSQL (DB)


---

## ✅ Features
- Matrix Synapse chat server with PostgreSQL
- NextJS frontend running in Docker
- NodeJS backend API
- Python NLP service (Flask)
- Fully containerized stack
- AWS EC2 deployment steps included

---

## 🧰 Tech Stack
| Layer | Technology |
|------|------------|
| Infra | AWS EC2 (Ubuntu 22.04) |
| Containers | Docker, Docker Compose |
| Chat Server | Matrix Synapse |
| Database | PostgreSQL |
| Frontend | React / NextJS |
| Backend | NodeJS Express |
| NLP | Python Flask (HuggingFace + FAISS optional) |
| Reverse Proxy (optional) | NGINX + SSL |

---

# ✅ Prerequisites

## AWS Requirements
- AWS Account
- 1 EC2 instance (Ubuntu 22.04)
  - Recommended: `t3.medium` or `t3.large`
  - Storage: 30GB

## Security Group Inbound Rules
✅ For testing deployment (IP-based):
| Port | Purpose |
|------|---------|
| 22 | SSH |
| 3000 | Frontend |
| 5000 | Backend |
| 7000 | NLP |
| 8008 | Matrix Synapse |

✅ For production (Domain + NGINX + SSL):
| Port | Purpose |
|------|---------|
| 22 | SSH |
| 80 | HTTP |
| 443 | HTTPS |
| 8448 | Matrix Federation (optional) |

---

# 🚀 Deployment (Testing Without Domain)

## Step 1: SSH into EC2
```bash
ssh -i your-key.pem ubuntu@EC2_PUBLIC_IP


Step 2: Install Docker + Compose










