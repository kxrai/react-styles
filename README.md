# 🌟 Tailwind CSS Styling Cheatsheet 🌟

Welcome to the Tailwind CSS Styling Cheatsheet! This project is a React.js website that provides a handy reference for various Tailwind CSS components. Whether you're looking for button styles, card styles, or any other component, you'll find it here!

## 🚧 Work in Progress 🚧

This project is currently a work in progress. We're continuously adding new components and improving existing ones. Stay tuned for more updates!

## 🚀 Project Overview

This website is designed to be your go-to resource for Tailwind CSS styling. Each page is dedicated to a specific type of component, showcasing different styles and usage examples.

### 📄 Pages

- **Button Styles**: A collection of various button styles you can use in your projects.
- **Card Styles**: Different card designs to enhance your web pages.
- **More to come!**: We'll keep adding more components and styles.

## 🛠️ Getting Started

To get started with this project, follow these steps:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/kxrai/react-styles.git
   cd react-styles
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install

   Alternatively, you can create a new React app and set up Tailwind CSS:
   ```sh
   npx create-react-app my-app
   cd my-app

   npm install -D tailwindcss postcss autoprefixer --legacy-peer-deps
   npx tailwindcss init -p

   npm install --save typescript @types/node @types/react @types/react-dom @types/jest
   ```

3. **Start the development server:**
   ```sh
   npm start
   # or
   yarn start
   ```

4. **Open your browser and visit:**
   http://localhost:3000

## 📁 Project Structure

Here's a brief overview of the project's structure:

```
react-styles/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── ButtonStyles.js
│   │   ├── CardStyles.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── ...
```

## 🎨 Styling with Tailwind CSS

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling. Tailwind CSS is a utility-first CSS framework that makes it easy to build custom designs directly in your markup.

### Adding New Components

To add a new component:

1. Create a new file in the `src/components/` directory.
2. Define your component and apply Tailwind CSS classes for styling.
3. Import and use the component in `App.js` or another relevant file.

## 📝 Setting Default Branch to Main

To set `main` as the default branch for all new repositories:
```sh
git config --global init.defaultBranch main
```

If you need to rename an existing branch from `master` to `main`:
```sh
# Rename the current branch to main
git branch -m master main

# Update the remote repository to use the new main branch
git push -u origin main

# Delete the master branch on the remote (optional)
git push origin --delete master
```
<!--
## 🤝 Contributing

Contributions are welcome! If you have any suggestions or improvements, please create a pull request or open an issue.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
-->
## 📬 Contact

If you have any questions or feedback, feel free to reach out:

<!--
- **Your Name**: Alicia Loi
- **Email**: your-email@example.com -->
- **GitHub**: [kxrai](https://github.com/kxrai)

---

Happy coding! 🎉
