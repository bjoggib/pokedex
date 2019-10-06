This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run project

1. Make sure you have a node installed on your computer(version 8.10 or higher).
2. Run npm install to install all dependencies.
3. Run the command: npm run dev, this will launch json server on port 5000 and the React application on port 3000.

## Tools used

This project was scaffolded with the Create-react-app.
In this project I only use functional components that make use of Hooks.

I used the following tools.

1. Redux for state management. For an application of this size Redux may not be necessary but as an application grows the benefits of Redux start to shine. So I decided to go with Redux to show that I know how this great state management tool works (Also, I was required to use it for this project :-) ).
2. Redux-thunk was used as middleware to be able to return functions in actions creators.
3. Json-server is used as a fake database. The data is all stored in the file db.json at the root of the project. Json-server lets you make async requests to the db.json file as if it were a RESTFUL web API. I also used Concurrently to run the json server and the application simultaneously.
4. I used React Router for client side routing. For this project it might be unnecessary but its nice to have.
5. Redux devtools extension was used as a DEV dependency to monitor the state changes in the console.
6. I used Bootstrap 4 to aid with CSS.
