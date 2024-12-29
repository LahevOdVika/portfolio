# Next.js Portfolio 🚀

Welcome to my Next.js portfolio! 🎉 This repository contains the code for my personal portfolio website, where I showcase my skills, projects, and experiences. 💻

## Features ✨
- **Fast Performance**: Powered by Next.js for seamless browsing. ⚡
- **Responsive Design**: Optimized for both desktop and mobile devices. 📱💻
- **Dynamic Content**: Easily updatable to reflect my latest work. 🔄
- **SEO Friendly**: Built with best practices for search engines. 🔍

## Getting Started 🛠️

### Prerequisites 📋
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (>= 18.x) ✅
- [npm](https://www.npmjs.com/) ✅

### Installation 📂

1. Clone this repository:
   ```bash
   git clone https://github.com/LahevOdVika/portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   next dev
   ```

5. Open your browser and visit `http://localhost:3000` or `http://your-ip:3000` on your LAN to explore my portfolio. 🌐

## Project Structure 🗂️

```
.
├── app           # Next.js app directory (App Router)
    ├── (components)   # Reusable React components
    ├── (home)       # Home page components
    ├── projects     # Projects page components
    ├── contact      # Contact page components
    ├── api          # API routes for dynamic content
├── public           # Static files (e.g., images, favicons)
├── init             # Initial SQL scripts
├── package.json     # Project metadata and dependencies
└── README.md        # Project documentation
```
***Each folder with page components include css files for these components***
## Customization 🖌️

### Pages 📄
The `app` directory contains the core pages of my portfolio:
- `(home)`: Home page directory 🏠
- `projects`: Projects page directory 🛠️
- `about`: About page directory 🙋‍♂️

### Components 🧩
Reusable components are in the `(components)` directory, such as:
- `card.jsx` 🧭

### Global Components 🌍
Global components are in the root of `app` directory:
- `layout.jsx` 📐
- `global.css` 🎨

### Styles 🎨
Global styles are in `styles/globals.css`. You can customize or add new styles in the `styles` directory to align with my personal branding. ✍️

## Deployment 🚀

1. Build the production version of the site:
   ```bash
   next build
   ```

2. Deploy the `out` directory to your preferred hosting platform:
    - [Vercel](https://vercel.com/) ✅
    - [Netlify](https://www.netlify.com/) ✅
    - [GitHub Pages](https://pages.github.com/) ✅

## Contributing 🤝

This is my personal portfolio, but feel free to share suggestions or feedback by opening an issue or pull request. 📝

## License 📜

This project is licensed under the [MIT License](LICENSE).
