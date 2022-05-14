<a href="https://www.karachiwaterproject.com/" style="color:inherit">
<p align="center">
<img height=100 src="./src/assets/img/kwp-logo.svg"/>
</p>
<h2 align="center">
KARACHI WATER PROJECT
</h2>
</a>

# Frontend for Karachi Water Project

---

## Modules & Libraries

### Technologies

- React v17
- React-router-dom v5
- Redux v4
- Google-maps-React v2
- Axios (latest)
- Material-UI v4

### Dependencies

<details><summary>Click To Expand</summary>

```
"@babel/core" : "7.14.0"
"@material-ui/core": "4.11.4"
"@material-ui/icons": "4.11.2"
"@material-ui/lab": "^4.0.0-alpha.61"
"axios": "^0.24.0"
"chart.js": "^3.5.0"
"classnames": "2.3.1"
"dotenv": "^10.0.0"
"google-maps-react": "^2.0.6"
"moment": "2.29.1"
"node-sass": "6.0.0"
"nouislider": "15.1.0"
"prop-types": "^15.8.0"
"react": "17.0.2"
"react-chartjs-2": "^3.0.4"
"react-datetime": "3.0.4"
"react-datetime-picker": "^3.4.3"
"react-dom": "17.0.2"
"react-error-overlay": "6.0.9"
"react-paginate": "^8.1.0"
"react-redux": "^7.2.6"
"react-router-dom": "5.2.0"
"react-scripts": "4.0.3"
"react-slick": "0.28.1"
"redux": "^4.1.2"
"redux-thunk": "^2.4.1"
"uuid": "^8.3.2"
```

</details>

### Developer Dependencies

<details><summary>Click To Expand</summary>

```
"@babel/cli": "7.13.16"
"@babel/plugin-proposal-class-properties": "7.13.0"
"@babel/preset-env": "7.14.1"
"@babel/preset-react": "7.13.13"
"eslint-plugin-react": "7.23.2"
```

</details>

---

## Routes

Routes are of 3 types.

- `<Route/>` : Normal route. Can be accessed by anyone.
- `<AdminRoute/>` : Admin route. Can only be accessed by Super-user.
- `<PrivateRoute/>` : Private route. Can only be accessed by logged-in users.

Routes:

- `/` : Home page (default redirect).
- `/team` : Teams page.
- `/projects/develop-low-cost` : Projects page (Flowmeter Development).
- `/projects/water-security` : Projects page (Water In Lyari).
- `/projects/toward-sustainable` : Projects page (Water Pricing).
- `/login` : Login page.
- `/dashboard` : Dashboard age (Maps view of nodes).
- `/nodes` : Nodes page (Card view of nodes).
- `/readings` : Readings page (Show readings of default node: drivers-area).
- `/readings/:slug` : Readings page (Show readings of selected node: slug given in URL).
- `/node/:slug` : Node Details page (Data analysis for selected node :slug given in URL).
- `/homenode/:slug` : Node page for Homeowner

---

## Setup & Installation

- Download the project with git-cli, github-cli or zip file (manually).
- Open project directory in terminal.
- Type `yarn` to install the dependencies. A new folder `node_modules` will be created in the project directory.
- Type `yarn start` to finally run the project.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

#### `yarn install:clean`

Removes all the currently installed dependencies, deletes the node_modules folder and package-lock.json file. Installs the required depencies again and finally runs the projects.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

#### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

#### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

#### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

#### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

#### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

---
