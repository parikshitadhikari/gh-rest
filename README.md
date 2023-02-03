# About the project

This is a frontend project built using [React](https://reactjs.org/) and [GitHub's rest api](https://docs.github.com/en/rest?apiVersion=2022-11-28).

## Running the project:

In the project directory, you can run:

### `npm i`
Installs all the required npm packages

### Setting up environment variables:
1. Create a .env file in the root directory

2. Add the following lines to the .env file:

`REACT_APP_GITHUB_URL = "https://api.github.com"`

`REACT_APP_GITHUB_TOKEN = "<add your github access token here>"`

To generate personal access token, open github, then goto: settings -> developer settings -> Personal access tokens -> Tokens (classic) -> Generate new token (classic) -> add note and generate new token.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Create React App

Learn about [Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

