# Loading Spinner

This project was created using React.js, Webpack & SCSS.

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:8080] to view it in the browser.

### `npm build`

Builds the app and the using netlify deploy you can publish the app to be visible in a browser.
I chose Netlify as I have used it in the past and it is quick and easy to deploy small apps such as this one.

Open [https://60a66992095e9c4a65924fb3--wetransfer-spinner.netlify.app/](https://60a66992095e9c4a65924fb3--wetransfer-spinner.netlify.app/) to view a full working version in the browser.

### `npm test`

Tests are using React Testing Library and Jest as the framework.

## Technical descisions

UseReducer has been used in App.js to limit the amount of re-renders the app does. On intial attempt I used useState but it quickly became apparent I need to update multiple states when performing some actions, therefore a reducer was a better option.
