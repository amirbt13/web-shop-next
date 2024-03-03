# eCommerce Project WEB SHOP

This project is a full-featured eCommerce platform built with Next.js 14, TypeScript, Tailwind CSS, and Redux Toolkit. It includes a variety of features such as a store and cart functionality, dark mode, authentication and authorization, and both server-side rendering (SSR) and static site generation (SSG) for optimal performance and SEO. The backend is integrated within the Next.js framework using API routes, and it connects to a MySQL database hosted on Liara Cloud, with Prisma as the ORM for efficient database management.

## Features

- **Store and Cart**: Browse products and manage your shopping cart with ease.
- **Dark Mode**: Toggle between light and dark themes for a comfortable browsing experience at any time of day.
- **Authentication and Authorization**: Secure user registration and login functionality, with role-based access control.
- **Dynamic Rendering**: Utilizes both SSG and SSR for fast load times and dynamic content rendering.
- **Backend Integration**: Built-in API routes within Next.js for handling backend logic seamlessly.
- **Database**: MySQL database hosted on Liara Cloud, managed with Prisma ORM for robust data handling.

## Technologies

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, Redux Toolkit
- **Backend**: Next.js API Routes
- **Database**: MySQL (Liara Cloud), Prisma ORM

## Getting Started

### Prerequisites

- Node.js (version 16.x or later)
- npm (version 7.x or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/amirbt13/web-shop-next.git
   cd web-shop-next

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Set up your environment variables:

- Copy the .env.example file to a new file named .env.
- Fill in the environment variables with your database credentials and any other required API keys or secrets.

4. Run the development server:

   ```bash
   npm run dev
   ```

- Visit http://localhost:3000 in your browser to view the application.

### Deployment

The project can be deployed on Vercel, Netlify, or any other platform that supports Next.js deployments. Follow the specific instructions provided by your deployment platform.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any features, bug fixes, or improvements.
