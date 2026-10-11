# 🛒 বাজার দর (BazarDor)

**বাজার দর** is a responsive Bangla market-price web application that
helps users explore everyday product prices, compare market rates, and
see price changes at a glance.

The interface is designed for mobile, tablet, and desktop screens.
Product listings show prices using Bengali numerals, while category
pages, product details, authentication, loading skeletons, and helpful
notifications make the experience easier to navigate.

> **Disclaimer:** Prices shown by the application are indicative and may
> vary depending on the market and current conditions.

## ✨ Features

-   **Responsive interface:** Layouts adapt to mobile, tablet, and
    desktop screens.
-   **Home page price sections:** Browse products whose prices have
    increased or decreased, along with the complete product list.
-   **Product cards:** View product illustrations, Bangla names, units,
    current prices, and percentage changes.
-   **Product detail pages:** Explore minimum, maximum, and average
    prices, plus market-wise prices.
-   **Category browsing and sorting:** Browse products by category and
    sort by default order, lowest price, or highest price.
-   **Bengali number formatting:** Display prices in Bengali numerals
    for a localized experience.
-   **Authentication:** Register and sign in with email/password, with
    Google and GitHub social sign-in through Better Auth.
-   **Protected pages:** Restrict access to pages that require an
    authenticated session.
-   **Profile management:** View profile information and update the
    user's name.
-   **Toast notifications:** Receive feedback for authentication
    actions, validation errors, and other relevant events.
-   **Loading skeletons:** Show loading placeholders while page data is
    being fetched.
-   **Not-found handling:** Display a friendly 404 experience for
    invalid routes or missing products/categories, with a link back to
    the home page.
-   **SEO metadata:** Set page titles and descriptions through Next.js
    metadata.

## 🧰 Technologies Used

  ------------------------------------------------------------------------------------------
  Technology                                             Purpose
  ------------------------------------------------------ -----------------------------------
  [Next.js](https://nextjs.org/) (App Router)            Application framework, routing, and
                                                         server-rendered pages

  [React](https://react.dev/)                            Component-based user interface

  [TypeScript](https://www.typescriptlang.org/)          Type-safe application code

  [Tailwind CSS](https://tailwindcss.com/)               Responsive styling

  [Better Auth](https://www.better-auth.com/)            Authentication and social sign-in

  [React                                                 Toast notifications
  Toastify](https://fkhadra.github.io/react-toastify/)

  [Vercel](https://vercel.com/)                          Deployment platform
  ------------------------------------------------------------------------------------------

The project may also use a database, product API, icon library, and
other UI utilities configured in the source code.

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

-   Node.js (use a version supported by the project's dependencies)
-   npm
-   Git

### 1. Clone the repository

``` bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd <YOUR_PROJECT_DIRECTORY>
```

Replace the placeholders with your repository URL and project directory.

### 2. Install dependencies

``` bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root and add the environment
variables required by your local configuration.

For example:

``` env
# Product API host used by the application
ATL_API=your-api-host.example.com

# Better Auth
BETTER_AUTH_SECRET=replace-with-a-long-random-secret
BETTER_AUTH_URL=http://localhost:3000

# Database connection (use the variable name expected by your auth/database configuration)
DATABASE_URL=your-database-connection-string

# Google OAuth (if enabled)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# GitHub OAuth (if enabled)
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

**Important:** - Use the exact environment-variable names expected by
your implementation. If your Better Auth configuration uses different
names, keep those names consistent. - Set OAuth callback URLs in the
Google and GitHub developer consoles to match the callback URLs required
by your Better Auth configuration. - Never commit `.env.local`, database
credentials, OAuth secrets, or other private keys to GitHub. - Configure
the same required variables in your Vercel project's **Settings →
Environment Variables** before deploying.

### 4. Start the development server

``` bash
npm run dev
```

Open <http://localhost:3000> in your browser.

### 5. Create a production build

``` bash
npm run build
npm run start
```

Run the scripts defined in your `package.json` if their names differ.

## 🧭 Main Pages

  -----------------------------------------------------------------------
  Page                                Purpose
  ----------------------------------- -----------------------------------
  `/`                                 Home page with the banner,
                                      price-change sections, and all
                                      products

  `/category/[categoryName]`          Products filtered by category, with
                                      sorting

  `/product/[slug]`                   Product details and market-wise
                                      prices; login required if
                                      configured as a protected route

  `/signin`                           Sign-in page

  `/signup`                           Registration page

  `/profile`                          User profile

  `/profile/update`                   Update profile information, if this
                                      is the route configured in the
                                      application
  -----------------------------------------------------------------------

> Route names should match the actual folders in `src/app`. If your
> implementation uses a different product-detail or profile-update path,
> update this table accordingly.

## 📱 Responsive Design

The application uses responsive layouts so that navigation, the price
ticker, hero section, product cards, forms, and tables remain usable on
different screen sizes.

## 🔐 Authentication

Authentication is handled by Better Auth. Email/password and configured
social providers are available through the authentication pages.
Protected routes should redirect unauthenticated visitors to the sign-in
page and provide appropriate feedback.

To enable social sign-in locally and in production, configure the
relevant provider credentials and callback URLs in your environment.

## 🚢 Deployment

The project can be deployed to Vercel.

1.  Push the project to GitHub.
2.  Import the repository into [Vercel](https://vercel.com/).
3.  Add all required environment variables in the Vercel project
    settings.
4.  Deploy the project.
5.  Test the home page, authentication, protected routes, category
    pages, product details, and page refreshes on the deployed URL.

**Deployment checklist** - \[ \] All required environment variables are
configured. - \[ \] OAuth callback URLs include the production domain. -
\[ \] The production build completes successfully. - \[ \] Dynamic
routes work when opened directly or refreshed. - \[ \] Invalid routes
show the intended 404 page. - \[ \] Authentication, profile updates, and
toast notifications work in production. - \[ \] The interface is checked
on mobile, tablet, and desktop.

## 📂 Project Structure

A typical Next.js App Router structure for this project may look like
this:

``` text
src/
└── app/
    ├── layout.tsx
    ├── page.tsx
    ├── loading.tsx
    ├── not-found.tsx
    ├── category/
    │   └── [categoryName]/
    │       ├── page.tsx
    │       └── loading.tsx
    ├── product/
    │   └── [slug]/
    │       ├── page.tsx
    │       └── loading.tsx
    ├── signin/
    ├── signup/
    └── profile/
```

Your actual folder structure may differ; this example illustrates the
route conventions rather than an exact file listing.

## 👨‍💻 Author

Developed as a market-price web application project using Next.js,
TypeScript, Tailwind CSS, and Better Auth.

## Live Project Link

https://bazar-dor-eight-omega.vercel.app
------------------------------------------------------------------------

**বাজার দর --- প্রয়োজনীয় পণ্যের দাম এক নজরে।**
