import React from 'react';

const InstallationNextJs = () => {
    return (
        `npx create-next-app@latest my-project --typescript --eslint
cd my-project`
    );
};

const InstallationNextJsTailwind = () => {
    return (
        `npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`
    );
};

const InstallationNextJsPath = () => {
    return (
        `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using 'src' directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`
    );
};

const InstallationNextJsCss = () => {
    return (
        `@tailwind base;
@tailwind components;
@tailwind utilities;`
    );
};

const InstallationNextJsRun = () => {
    return (
        `npm run dev`
    );
};

const InstallationNextJsStart = () => {
    return (
        `export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}`
    );
};

export default {
    InstallationNextJs,
    InstallationNextJsTailwind,
    InstallationNextJsPath,
    InstallationNextJsCss,
    InstallationNextJsRun,
    InstallationNextJsStart
};