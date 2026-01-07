# 🍋 Little Lemon – React Restaurant App

**Little Lemon** is a responsive restaurant web application built with **React**, focused on clean UI, modern component architecture, and real-world state management patterns.

This project is part of my front-end development portfolio and was designed to demonstrate how a production-style React app handles **global state, component composition, and UI behaviour** without unnecessary complexity.

---

## 🚀 Live Features

- 📋 Dynamic food menu by category (News, Starters, Mains, Desserts, Drinks)
- 🛒 Global cart state (shared across the entire app)
- ➕➖ Add / remove items from both **Food Cards** and **Cart Modal**
- 🔢 Cart quantity persists when switching categories
- 🖼️ Cart modal displays item images, quantities, line totals, and total price
- 📱 Mobile-friendly carousel using Swiper
- 💻 Responsive layout for desktop and mobile
- 🎨 Styled using **styled-components**

---

## 🧠 Key Concepts Demonstrated

This project intentionally focuses on **core React fundamentals** used in real applications:

- **Single Source of Truth**  
  Cart state lives in one place (`App.jsx`) and drives all UI.

- **Derived UI**  
  Quantities on food cards and in the cart modal are derived from global state.

- **Props Down / Events Up**  
  Child components never mutate state directly — they request changes via callbacks.

- **State Lifting**  
  Fixed a real bug caused by component unmounting when switching categories.

- **Clean Separation of Concerns**  
  - Logic → component files  
  - Styling → `*.style.jsx` files  
  - Data → shared menu data file  

---

## 🏗️ Tech Stack

- **React**
- **JavaScript (ES6+)**
- **styled-components**
- **Swiper.js**
- **react-grid-system**
- **Vite**
- **Git & GitHub**

---

## 📂 Project Structure (simplified)


