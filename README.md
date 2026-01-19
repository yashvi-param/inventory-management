<img width="1851" height="893" alt="Screenshot 2026-01-19 122953" src="https://github.com/user-attachments/assets/5ddd3074-30d8-4052-8522-ecaa792c0213" />

# 🛒 Product Management App (React + Redux Toolkit)

A simple **Product Management Application** built using **React**, **Redux Toolkit**, and **React-Bootstrap**.
This app allows users to **add, update, delete, search, filter, and sort products** with a clean UI.

---

## ✨ Features

* ➕ Add new products
* ✏️ Update existing products
* ❌ Delete products
* 🔍 Search products by name
* 🔃 Sort products by:

  * ID (Ascending / Descending)
  * Price (Ascending / Descending)
  * Quantity (Ascending / Descending)
* 📦 View total price per product (price × quantity)
* 🎨 Responsive UI using React-Bootstrap
* 🧠 State management using Redux Toolkit

---

## 🧩 Tech Stack

* **React**
* **Redux Toolkit**
* **React Redux**
* **React-Bootstrap**
* **React Icons**
* **JavaScript (ES6+)**

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── InputForm.jsx        # Add / Update product form
│   └── ProductList.jsx     # Product table with search & filters
│
├── features/
│   └── product/
│       └── productSlice.js # Redux slice for product state
│
├── app/
│   └── store.js            # Redux store configuration
│
├── App.js
└── index.js
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/product-management-app.git
cd product-management-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npm start
```

The app will run on:
👉 `http://localhost:3000`

---

## 🧪 How It Works

### ➕ Add Product

* Fill in the product form
* Click **Add Product**
* Product appears in the table

### ✏️ Update Product

* Click the **edit icon** in the product table
* Form auto-fills with product data
* Click **Update Product**

### ❌ Delete Product

* Click the **delete icon**
* Product is removed from the list

### 🔍 Search & Filter

* Search by product name
* Sort using dropdown options

---

## 🖼 UI Preview (Features)

* Responsive form layout
* Product table with actions
* Empty state message when no products exist

---

## 📌 Future Improvements (Optional)

* Persist data using LocalStorage or backend API
* Add product validation
* Add pagination
* Add category-based filtering
* Authentication (Admin/User)

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

---

## 📄 License

This project is licensed under the **MIT License**.

---

### 👨‍💻 Author



