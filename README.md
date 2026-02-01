# ShoppyGlobe E-commerce Application 🛒

A modern, responsive Single Page Application (SPA) built with **React**, **Redux Toolkit**, and **Tailwind CSS**. This application simulates a real-world e-commerce platform with product browsing, searching, cart management, and a checkout flow.

## 🚀 Features

* **Dynamic Product Listing:** Fetches data from a remote API using a **Custom Hook** (`useFetchProducts`).
* **Smart Search:** Filter products instantly using **Redux State** management.
* **Shopping Cart:** Full CRUD capabilities (Add, Remove, Update Quantities) managed via **Redux Toolkit**.
* **Product Details:** Dynamic routing (`/product/:id`) to view individual product information.
* **Checkout Flow:** A functional checkout form that validates inputs, clears the global cart state, and redirects the user.
* **Performance Optimization:** Implements **Code Splitting** and **Lazy Loading** (`React.lazy` + `Suspense`) for all pages and images.
* **Error Handling:** Custom 404 Page and graceful API error management.
* **Responsive Design:** Fully styled with **Tailwind CSS** for mobile and desktop views.

## 🛠️ Tech Stack

* **Frontend Framework:** React (Vite)
* **State Management:** Redux Toolkit (Slices for Cart & Products)
* **Routing:** React Router DOM (v6 Data Router)
* **Styling:** Tailwind CSS
* **Data Source:** DummyJSON API

## ⚙️ Installation & Run Instructions

Follow these steps to run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/AtulMishra001/shoppy-globe
    cd shoppy-globe
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    *(Note: This installs React, Redux, Router, and Tailwind dependencies)*

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the App:**
    Click the link shown in the terminal (usually `http://localhost:5173/`).

## 📂 Project Structure

This project follows a "Feature-Folder" architecture to support scalability and future backend integration.

```bash
# 📂 ShoppyGlobe Project Structure

shoppy-globe/
├── node_modules/           # Dependencies (Do not commit to Git)
├── public/                 # Static assets
│   └── vite.svg
├── src/
│   ├── app/                # Global Store Configuration
│   │   └── store.js        # Redux store setup (combines cart & product slices)
│   │
│   ├── components/         # Reusable UI Components
│   │   ├── CartItem.jsx    # Row item for Cart page (with quantity controls)
│   │   ├── Header.jsx      # Navigation bar with Cart badge
│   │   ├── Loading.jsx     # Spinner component for Suspense fallback
│   │   ├── ProductItem.jsx # Individual product card (image, price, add-to-cart)
│   │   ├── Footer.jsx      # Simple footer with copy right text
│   │   └── ProductList.jsx # Grid container for product items
│   │
│   ├── features/           # Redux Slices (State Logic)
│   │   ├── cartSlice.js    # Logic for add, remove, update quantity, clear cart
│   │   └── productSlice.js # Logic for search query state
│   │
│   ├── pages/              # Main Page Views (Lazy Loaded)
│   │   ├── Cart.jsx        # Shopping cart summary page
│   │   ├── Checkout.jsx    # Checkout form and order placement logic
│   │   ├── Home.jsx        # Landing page (contains Search & ProductList)
│   │   ├── NotFound.jsx    # Custom 404 Error page
│   │   └── ProductDetail.jsx # Dynamic route page (/product/:id)
│   │
│   ├── utils/              # Service Layer & Custom Hooks
│   │   ├── api.js          # Mock API service (fetches from DummyJSON)
│   │   └── useFetchProducts.js # Custom Hook to manage loading/error states
│   │
│   ├── App.jsx             # Main Layout & Router Configuration
│   ├── index.css           # Tailwind CSS imports
│   └── main.jsx            # Entry point (Redux Provider wrap)
│
├── .gitignore              # Files to ignore in Git (node_modules, etc.)
├── index.html              # HTML entry point
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Complete description of all nested dependencies and scripts
├── README.md               # Project documentation and setup guide
└── vite.config.js          # Vite configuration

```



## 🧠 Architecture Highlights

* **Service Layer Pattern:** API calls are abstracted in `src/utils/api.js`. This allows for easy swapping of the backend (e.g., from DummyJSON to a real Node.js server) without breaking UI components.
* **Custom Hooks:** Data fetching logic is isolated in `useFetchProducts` to separate concerns (Logic vs. UI).
* **Redux Implementation:** Uses `createSlice` for immutable state updates (via Immer) to handle complex cart logic like "quantity floor" validation.

---
[GitHub-link](https://github.com/AtulMishra001/shoppy-globe)