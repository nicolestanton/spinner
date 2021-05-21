# Overview

This project is a replica of the WeTransfer spinner. It is created using React.js, Webpack & SCSS.

## Getting Started

- Install node
- Run npm install

## Running in development mode:

### `npm run start`

in terminal\
Open [http://localhost:8080] to view it in the browser.

## Create production build:

### `npm run build`

in terminal

## Run unit tests

### `npm run test`

in terminal\
Tests are using React Testing Library and Jest as the framework.

## Deploy to Netlify

### `npm run build`

### `netlify deploy`

in terminal\

Builds the app and the using netlify deploy you can publish the app to be visible in a browser.
I chose Netlify as I have used it in the past and it is quick and easy to deploy small apps such as this one.

Open [https://60a66992095e9c4a65924fb3--wetransfer-spinner.netlify.app/](https://60a66992095e9c4a65924fb3--wetransfer-spinner.netlify.app/) to view a full working version in the browser.

## Technical Decisions:

UseReducer has been used in App.js to limit the amount of re-renders the app does. On intial attempt I used useState but it quickly became apparent I need to update multiple states when performing some actions, therefore a reducer was a better option.

I have added Husky into the project to run the test before I am able to commit a change, this will provide fast feedback and provide an extra security layer.

Eslint has also been used to ensure my code follows the correct patterns expected by React.js. This will make my code more consistent and prevent bugs in the future.
