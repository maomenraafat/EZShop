# EZShop - Product Gallery

**EZShop** is a responsive Angular application that fetches and displays products from the **Fake Store API**. It features a clean and modern design, dynamic routing, and a seamless user experience.

---

## Features

- **Product Gallery**: Fetch and display products with details like name, image, price, and short description.
- **Product Details Page**: Dynamic routing to view detailed information about each product, including full description, category, and price.
- **Responsive Design**: Built with **Tailwind CSS** to ensure a consistent and professional look across all devices.
- **Enhancements**:
  - Search bar to filter products by name.
  - Loading indicators for a smooth user experience.

---

## Tech Stack

- **Frontend**: Angular
- **Styling**: Tailwind CSS
- **API**: [Fake Store API](https://fakestoreapi.com)

---

## Live Demo

Check out the live demo of **EZShop** here:  
[Live Demo Link](https://ez-shop-vert.vercel.app/) <!-- Add your live demo link here -->

---

## Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

- Node.js (v16 or higher)
- Angular CLI (v15 or higher)
- Git (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/maomenraafat/EZShop.git
   cd shop-eazy
   ```

# Shop-Eazy

## Installation

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
ng serve
```

### 3. Open the app in your browser

Navigate to `http://localhost:4200` to view the application.

---

## Project Structure

```
products-gallery/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── interceptors/        # HTTP interceptors (loading & error handling)
│   │   │   │   ├── error/
│   │   │   │   │   ├── error.interceptor.spec.ts
│   │   │   │   │   ├── error.interceptor.ts
│   │   │   │   ├── loading.interceptor.spec.ts
│   │   │   │   ├── loading.interceptor.ts
│   │   ├── layout/
│   │   │   ├── footer/
│   │   │   ├── navbar/
│   │   │   ├── notfound/
│   │   ├── features/
│   │   │   ├── pages/
│   │   │   │   ├── home/
│   │   │   │   ├── interfaces/
│   │   │   │   ├── product-details/
│   │   ├── shared/
│   │   │   ├── components/          # Reusable UI components
│   │   │   ├── interfaces/
│   │   │   │   ├── product.ts
│   │   ├── services/                 # API and data handling services
│   │   │   ├── flowbite/
│   │   │   ├── product/    # Main module
│   │   ├── assets/                 # Static assets (e.g., images)
│   │    ├── styles.css              # Global styles
│   │    ├── angular.json            # Angular configuration
│   │    ├── package.json            # Project dependencies
│   │    ├── README.md               # Project documentation
```

---

## Error Handling & Interceptors

This project uses **HTTP Interceptors** to handle:

- **Loading State**: `loading.interceptor.ts` displays a spinner when making API calls.
- **Error Handling**: `error.interceptor.ts` captures and displays user-friendly error messages.

---

## Future Enhancements

- **Shopping Cart Feature** - Allow users to add products to a cart.
- **Product Ratings & Reviews** - Display customer ratings and allow users to review products.
- **Filter Products by Category** - Enable category-based filtering.
- **Improved Mobile UX Design** - Optimize UI/UX for better mobile responsiveness.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch:
   ```bash
   git checkout -b feature/maomenraafat
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/maomenraafat
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for providing the product data.
- Angular and Tailwind CSS for making this project possible.
