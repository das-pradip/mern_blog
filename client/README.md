# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


- The **frontend** is built with **Vite** (hence `npm run dev` starts the Vite dev server).
- The **backend** is started using `npm run dev` (with `nodemon` watching `api/index.js`).
- There's also a unified root-level `build` script to install dependencies and build the client.


---

# MERN Blog

A full-stack blogging platform built using the **MERN stack** (MongoDB, Express.js, React, Node.js) with **Tailwind CSS** and **Vite** powering the frontend. This app allows users to create, read, update, and delete blog posts in a clean and modern UI.

---

 🔥 Features

- ✅ JWT-based Authentication
- 📝 Full Blog CRUD functionality
- 🎨 Tailwind CSS styling
- ⚡ Vite for super-fast frontend development
- 📦 Redux Toolkit + Redux Persist
- 🕓 Moment.js for time formatting
- 🔒 Password hashing with bcrypt

---

 🧩 Project Structure

```
mern_blog/
├── api/             # Express backend
│   ├── models/      # Mongoose models
│   ├── routes/      # Express routes
│   └── index.js     # Main backend entry
├── client/          # React frontend (Vite)
│   ├── public/      # Static assets
│   ├── src/         # React components, pages, redux, etc.
│   └── vite.config.js
├── .env             # Environment variables (not tracked)
├── package.json     # Root project config
└── README.md        # Project documentation
```
---

 🚀 Getting Started

 🛠 Prerequisites

- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/) (local or cloud)

---

🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/das-pradip/mern_blog.git
   cd mern_blog
   ```

2. **Install root dependencies**

   ```bash
   npm install
   ```

3. **Install frontend dependencies**

   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Create environment files**

   - In `/api/.env`:

     ```
     MONGODB_URI=your_mongo_uri
     JWT_SECRET=your_jwt_secret
     PORT=3000
     ```

   - In `/client/.env` (optional for Vite):

     ```
     VITE_API_BASE_URL=http://localhost:3000
     ```

---

 💻 Running the App Locally

 🧠 Backend (API)

```bash
npm run dev
```

Runs the Express server with `nodemon` at [http://localhost:5000](http://localhost:3000)

---

 🎨 Frontend (React + Vite)

```bash
cd client
npm run dev
```

Runs the Vite dev server at [http://localhost:5173](http://localhost:5173)

---

📦 Build for Production

```bash
npm run build
```

This will:
- Install all dependencies
- Build the Vite React app into `/client/dist`

To serve the frontend with the backend, make sure your Express app is configured to serve the static build from `client/dist`.

---

 🛠 Deployment Notes

- Backend can be deployed to Heroku, Render, or Vercel (with server setup).
- Frontend (if served separately) can be deployed via Netlify or Vercel.
- Combine both using a reverse proxy or deploy monolith with Nginx/Docker.

---

 🤝 Contributing

1. Fork this repo
2. Create your feature branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/awesome-feature`)
5. Create a new Pull Request

---
