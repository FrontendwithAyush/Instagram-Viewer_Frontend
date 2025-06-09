# 📸 Instagram Profile Viewer

An anonymous Instagram profile viewer built using **React** for the frontend and **Puppeteer** (or Playwright, customizable) with **Express.js** for the backend. This project scrapes publicly available data such as profile picture, bio, and latest posts from Instagram without logging in.

---

## 📸 Preview

![insta App Preview](./screenshots/insta-preview.png) <!-- Add a screenshot named like this in a 'screenshots' folder -->

---

## 📁 Project Structure

```bash
instagram-viewer/
│
├── frontend/      # ReactJS frontend
│
└── backend/       # Node.js + Puppeteer backend (see repo link below)
```

---

## 🚀 Features

- ✅ View any public Instagram profile
- ✅ Display bio, username, and profile picture
- ✅ Fetch latest images/reels (public only)
- ✅ Responsive, mobile-friendly UI
- ✅ No Instagram login required

---

## 🛠️ Tech Stack

**Frontend:**
- React
- Axios
- Bootstrap

**Backend:**
- Node.js
- Express.js
- Puppeteer
- CORS

---

## 📦 Installation

### 🔹 Frontend (React)

```bash
cd frontend
npm install
npm start
```

Runs on: `http://localhost:3000`

---

### 🔹 Backend (Express + Puppeteer)

📦 Backend Code Repo: [View Backend Repository](https://github.com/FrontendwithAyush/instagram-viewer-backend)

```bash
git clone https://github.com/FrontendwithAyush/instagram-viewer-backend.git
cd instagram-viewer-backend
npm install
npm start
```

Runs on: `http://localhost:5000`

> Make sure to allow CORS and set `headless: false` in Puppeteer to log in and save cookies manually for the first time.

---

## 📂 API Routes (Backend)

| Method | Endpoint                  | Description                            |
|--------|---------------------------|----------------------------------------|
| GET    | `/reels/:username`        | return latest 6 reels                  |
| GET    | `/profile/:username`      | Returns Instagram profile info         |

---

## 📷 Screenshots

<div align="center">
<img src="./screenshots/img1.png" width="200" />
<img src="./screenshots/img2.png" width="200" />
<img src="./screenshots/img3.png" width="200" />
</div>

---

## 🔐 Disclaimer

This project is for **educational purposes only**. It does not store any user data or bypass Instagram privacy settings. Only public profiles can be viewed.

---

## 🧑‍💻 Author

- **Ayush Kumbhalkar**
- [LinkedIn](https://www.linkedin.com/in/ayush-frontend)
- [GitHub](https://github.com/FrontendwithAyush)
