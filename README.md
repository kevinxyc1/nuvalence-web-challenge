# Address Book

## **[Check out the hosted site here!](https://master.duq2qg6smh3q8.amplifyapp.com/)**:tada:

<img src="https://github.com/kevinxyc1/nuvalence-web-challenge/blob/master/assets/ui.png" width="954" height="496">

## Features

All of the required features are implemented:
- display list of persons from address book
- select a person to see details (first name, last name, phone number)
- follows community standard syntax and style
- has no debug logging, TODOs, or FIXMEs
- testing coverage to ensure quality and safety

**Additional Features**

- user can select how many contacts to display
- deployed to AWS amplify
- error handling for querying randomuser API
- input validation for number of contacts to display
- more details about persons such as image, location, email and date of birth
- simple, modern UI
- mobile responsive design


## Technologies & Libraries

- React and Javascript
- [Semantic UI](https://react.semantic-ui.com/) for designing components and icons
- [Axios](https://github.com/axios/axios) for the [randomuser](https://randomuser.me/) API requests
- AWS Amplify for hosting

## Deployment

The web application is already deployed onto AWS amplify. <br />
The instructions for deployment is as following and can also be found [here](https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-one/?e=gs2020&p=build-a-react-app-intro):
1. Log into AWS console and choose AWS Amplify
2. In the AWS Amplify service console, select "Get Started" under Deploy
3. Select GitHub as the repository service and select Continue
4. Authenticate with GitHub and return to the Amplify console. Choose the repository and master branch you created earlier, then select Next
5. Accept the default build settings and select Next
6. Review the final details and select Save and Deploy.

## Installation

To run the project locally, run the following commands:

```
npm i
npm start
```

Note: this assumes `node` is installed

## Overall Approach

- Firstly, **React** is chosen for writing reusable components and it is integrated with **Semantic UI** for better design. 
- To query randomuser API, I used **Axios** to make promised-based http request. 
- The number of results to display is based on the /results={number} and **React Hooks** is implemented to better manage the state and props. 
- After retrieving the data, each person in a list is **mapped** to a single card and set number of cards in a row to 5. 
- The **Card**, **Header** and **Detail** component are built independently and integrated together. 
- Lastly, **invalid inputs** are validated before submitting the form and a message will display if input is not valid.

## To Be Improved

| feature to add                              | time to complete |
|---------------------------------------------|------------------|
| add/delete contacts to/from "favorite" list | 2 hr             |
| sort contact names by alphabetical order    | 2 hr             |
| cache previous result and fetch when reload | 2 hr             |

To make the project more robust if there is more time, I would create more extensive test suites with Jest and display different error messages on the frontend for different inputs. There could be tests for each component as well. I would also introduce useEffect to better perform side effects since useState can be async and not updating the value right away. 

<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
