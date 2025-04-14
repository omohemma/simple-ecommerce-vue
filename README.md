# 🛒 Simple E-commerce App

A minimal e-commerce web application built with Vue.js, featuring a modern UI, clean architecture, and state management using Vuex. The app consumes the [Fake Store API](https://fakestoreapi.com/) and demonstrates best practices for building scalable Vue applications.

---

## 🚀 Tech Stack

- **Vue 3** – Frontend framework
- **Vue Router** – Client-side routing
- **Vuex** – State management
- **Axios** – HTTP client
- **Tailwind CSS** – Utility-first CSS framework
- **Headless UI + Heroicons** – Accessible UI components and icons
- **LocalStorage** – Lightweight persistence for user preferences

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/omohemma/simple-ecommerce-vue.git

# Navigate into the project directory
cd simple-ecommerce-vue

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 🧰 Features

### 🏠 Home Page

- Fetched and displayed product categories from the API.
- Implemented a search bar that filtered products by title.
- Displayed the last 5 favorited and 5 most recently viewed products using `localStorage` or Vuex.

### 🗂 Categories Page

- Retrieved and listed all product categories from the API.
- Enabled category selection to fetch and display products in a responsive card layout.
- Implemented pagination to display 10 products per page.

### 📦 Product Listing Page

- Rendered products in a visually appealing, card-based grid layout.
- Displayed key product details including image, name, price, and category.
- Added pagination to allow navigation across multiple product pages.

### 🔍 Product Details Page

- Navigated to a dedicated product details page when a product was clicked.
- Displayed complete product information: image, title, price, category, and description.
- Allowed users to add or remove products from their favorites.
- Tracked and displayed recently viewed products.

### ❤️ Favorites Page

- Displayed all favorited products in a structured card layout.
- Showed detailed information including image, name, price, and category.
- Included functionality to remove individual products from the favorites list.

---

## 🛠 Implementation Notes

- **State Persistence:**  
  Favorites and last viewed products are persisted using `localStorage` for simplicity and wide browser support.  
  *(VuexPersist is intentionally not used due to limited support and outdated maintenance.)*

- **UI Design:**  
  Replaces traditional tables with **Tailwind UI card components** to enhance visual appeal and responsiveness.

- **API Layer:**  
  All API calls are abstracted into dedicated **service modules** for easier maintenance and flexibility when handling versioning or endpoint changes.

- **Vuex Store Architecture:**  
  Vuex store is **modularized** and **namespaced** to promote scalability, maintainability, and avoid naming collisions across actions, getters, and mutations.

- **UX Enhancements:**
    - Fully **responsive** across devices.
    - Includes **loading indicators** and **error states** for API requests.
    - Handles **empty states** gracefully with informative messages and fallback visuals.

---

## 📡 API

This app uses the free and public **[Fake Store API](https://fakestoreapi.com/)** to fetch products and categories.

---

## 🧑‍💻 Author

Built with ❤️ by Emmanuel Omololu

---