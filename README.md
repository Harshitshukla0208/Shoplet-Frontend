# Shoplet Frontend

Shoplet is an e-commerce application frontend built with React.js, utilizing React Router for navigation. It is linked with the Shoplet backend for data retrieval and management.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd shoplet-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   The application will be running at [http://localhost:5173](http://localhost:5173) by default.

## Features

- **Navigation**: Navigate through different pages:
  - **Home page**: Displays the main banners and featured items.
  - **Shop page**: Shows all available products with categories.
  - **Product pages**: Detailed information about a single product.
  - **Cart page**: Displays the products added to the cart.
  - **Login/Signup page**: Provides forms for user authentication.
- **Product Categorization**: View products categorized by men, women, and kids.
- **Authentication**: Login or Signup to access account features.
- **Shopping Cart**: Add products to the cart and proceed to checkout.

## Components

### Navbar

The Navbar component provides navigation links to different pages of the application.

### ShopCategory

The ShopCategory component displays products categorized by men, women, or kids.

### Shop

The Shop component displays the main shop page with banners, popular items, offers, and new collections.

### Product

The Product component displays detailed information about a single product.

### Cart

The Cart component displays the products added to the cart and allows users to proceed to checkout.

### LoginSignup

The LoginSignup component provides forms for users to login or signup.

## Dependencies

- [react-router-dom](https://www.npmjs.com/package/react-router-dom): For routing within the application.
- [axios](https://www.npmjs.com/package/axios): For making HTTP requests to the backend server.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## License

This project is licensed under the [MIT License](LICENSE).