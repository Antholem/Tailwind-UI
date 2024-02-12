import React from 'react';

const InstallationCliSourceDark = () => {
    return (
        `npm install -D tailwindcss
npx tailwindcss init`
    );
};

const InstallationPaths = () => {
    return (
        `/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}`
    );
};

const InstallationDirectives = () => {
    return (
        `@tailwind base;
@tailwind components;
@tailwind utilities;`
    );
};

const InstallationBuildProcess = () => {
    return (
        `npx tailwindcss -i ./src/input.css -o ./src/output.css --watch`
    );
};

const InstallationHtml = () => {
    return (
        `<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>`
    );
};

export default {
    InstallationCliSourceDark,
    InstallationPaths,
    InstallationDirectives,
    InstallationBuildProcess,
    InstallationHtml
};