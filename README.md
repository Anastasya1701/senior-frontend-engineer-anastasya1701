## Shopping cart

### 1. Add new Product form

The product form allow the user to add:
- title [`required`]
- description [`required`]
- price [`required`]
- category [`select`]

### 2. Product list view

This is the entry view of the application, it should display the list of all products added by the user. The user can edit or delete any item from the list.

### 3. Categories

Using categories list from the `utils/categories.json` file, they are deserialized and displayed as a tree of categories. 

## Getting started

   The app is built using:

    - [React](https://reactjs.org/), a library for building user interfaces that's widely used at SumUp
    - [Next.js](https://nextjs.org/), a "meta" framework for React that abstracts away the build configuration and provides additional server-side capabilities

   The main entry point for the app lives at [`pages/index.js`](./pages/index.js).

   Make sure you have Node.js v18+ installed. I recommended using a [Node version manager](https://npm.github.io/installation-setup-docs/installing/using-a-node-version-manager.html) (such as [nvm](https://github.com/nvm-sh/nvm)) that enables you to switch between multiple versions of Node.js.

   Install all dependencies by running `yarn`, then start the app by running `yarn dev`. The app will be available at [localhost:3000](http://localhost:3000).