## Description
This ToDo-App was donwloaded from respository https://github.com/iamspruce/create-a-todo-app-with-React to perform automated tests with the Playwright framework and the Typescript programming language and applying Page Object Model design pattern.

## Test Cases
- **TC1**: Verify the page title.
- **TC2**: Add a task and verify the table contains the test case name.
- **TC3**: Add a task and mark it as done.
- **TC4**: Add a task and delete it.
- **TC5**: Add eight tasks which are defined in a list, mark the even tasks as done and check that the counter contains 4/8.


## Getting Started
1. Clone or download the repository
-  open a new terminal and move to the application's folder `cd create-a-todo-app-with-React` 
- Run `npm install` to install dependencies.
- Run `npm run dev` to execute the application.
- Open the url `http://localhost:3000/` and verify the application works correctly in the browser.

2. open a new terminal and move to e2e folder
- `cd e2e`
- install playwright with the following commands

3. Install Playwright
- `npm init -y`
- `npm i -D playwright @playwright/test`
- `npx playwright install`

## Test execution
`npx playwright test`

## Test debugging
`npx playwright test --debug`

## Execute a specific test case
`npx playwright test --grep 'testCaseName'`
