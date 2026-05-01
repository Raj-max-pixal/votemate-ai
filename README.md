# 🚀 VoteMate AI — Election Learning & Simulation Platform

VoteMate AI is an interactive web application that helps users **understand elections, simulate voting, and verify election-related information using AI**.

It combines **education + simulation + AI assistance** into one platform to make elections simple and accessible.

---

## 🌐 Live Demo

👉 Deployed on Google Cloud Run:
`https://your-cloud-run-url`

---

## 📦 GitHub Repository

👉 https://github.com/Raj-max-pixal/votemate-ai

---

## ✨ Features

### 📚 Learn Election Process

* Step-by-step breakdown of Indian elections
* Timeline view from announcement → results
* Concepts explained: EVM, VVPAT, MCC

---

### 🤖 AI Chat Assistant

* Ask anything about elections
* Powered by **Google Gemini AI**
* Provides simple, structured explanations

---

### 🗳️ Election Simulator

* Add custom candidates
* Cast votes in real-time
* Live result visualization
* Winner declaration system

---

### 🔍 Fake News Detector

* Paste election-related news
* AI analyzes and classifies:

  * Real ✅
  * Fake ❌
  * Misleading ⚠️

---

### 📝 Voter Registration Guide

* Step-by-step onboarding flow
* Eligibility check
* Required documents
* Submission walkthrough

---

## 🛠️ Tech Stack

### Frontend

* HTML, CSS, JavaScript
* Responsive UI with modern design

### Backend

* Node.js + Express
* REST API for AI communication

### AI Integration

* Google Gemini API

### Deployment

* Google Cloud Run

---

## 🔐 Security Practices

* API keys stored in `.env` (not exposed)
* Backend handles all AI requests
* No sensitive data stored

---

## ⚡ How It Works

1. User enters a query in chat
2. Frontend sends request to backend
3. Backend calls Gemini AI API
4. AI response is returned to frontend
5. Displayed in chat UI

---

## 🧪 Testing

* Manual UI testing for all flows
* Chat API tested using real queries
* Error handling for failed API calls

---

## ♿ Accessibility

* Semantic HTML structure
* Keyboard-friendly navigation
* Clear UI contrast for readability

---

## 📂 Project Structure

```
project/
│
├── frontend/
│   └── index.html
│
└── backend/
    ├── server.js
    ├── package.json
    ├── .env
    └── Dockerfile
```

---

## ⚙️ Setup Instructions

### 1. Clone repository

```
git clone https://github.com/Raj-max-pixal/votemate-ai
cd votemate-ai
```

---

### 2. Install backend dependencies

```
cd backend
npm install
```

---

### 3. Add environment variables

Create `.env` file:

```
GEMINI_API_KEY=your_api_key_here
```

---

### 4. Run backend

```
node server.js
```

---

### 5. Open frontend

Open `index.html` in browser

---

## 🚀 Deployment

Deployed using:

* Google Cloud Run
* Docker container

---

## 🎯 Future Improvements

* Voice assistant integration
* Multi-language support
* Real-time election data APIs
* User login system

---

## 🙌 Acknowledgements

* Google Gemini AI
* Election Commission of India (reference data)

---

## 📌 Author

**Raj**
B.Tech IT Student | Developer | AI Enthusiast

---

## ⭐ If you like this project

Give it a star on GitHub ⭐
