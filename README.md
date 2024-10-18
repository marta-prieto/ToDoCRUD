# TODO CRUD Application

This project involves creating a TODO CRUD (Create, Read, Update, Delete) application based on a provided design. The application interacts with a dummy REST API to load, add, and delete TODO items. The main view displays a task list, and users can add new tasks through a separate form in the 'Add Task' view.

## Features

- **Task List View**: Initially loads 3 'todo' items from the dummy REST API.
- **Add/Delete TODOs**: Users can add and delete TODOs in a 'My Tasks' section using the form provided in the 'Add Task' view.
- **Form Validation**: Proper validation for the task form to ensure correct input.
- **Error Handling**: Handling any possible errors that may arise during API interactions.
- **Pagination**: Implemented pagination for the 'todo' items to ensure a clean UI/UX for large lists of tasks.

## GitHub Link

https://github.com/marta-prieto/ToDoCRUD

## Tech Stack

- **REST API**: The project uses a dummy REST API for fetching and managing TODO items.
- **Frontend Framework**: (React/Vue/Angular/Other framework or Vanilla JS, depending on your stack choice).
- **CSS**: For styling the application, (SCSS/CSS Modules/Styled Components, depending on your choice).
- **Form Validation**: Custom or framework-provided validation for task inputs.
- **Error Handling**: Managed through (Axios fetch or custom handlers, depending on your choice).- **Manejo de errores**: administrado a través de (recuperación de Axios o controladores personalizados, según su elección).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-crud-app.git
2. Navigate to the project directory: cd todo-crud-app
4. Install the necessary dependencies (if using a JavaScript framework like React or Vue):
5. npm install
6. Run the application locally:
7. npm start

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## API Details
The application interacts with a dummy REST API to manage TODOs. Below are the main API endpoints used:
GET /todos: Fetches the list of TODOs.
POST /todos: Adds a new TODO item.
DELETE /todos/: Deletes a TODO item by ID.
The initial task list view loads 3 items from the GET /todos endpoint. 
New TODOs can be added via the form in the 'Add Task' view, and tasks can be deleted from the 'RemoveTask section.


## Code Organization
Single Responsibility Principle (SRP): 
Each component and function is responsible for a specific task. For instance, TaskList.js manages the rendering of tasks, and AddTask.js handles the form logic.
Separation of Concerns: 
API logic is handled in api.js, while UI components manage rendering and interactivity.
Form Validation: 
Handled in validation.js, ensuring that tasks are only added when valid inputs are provided.
Error Handling
All API requests are wrapped in try/catch blocks to handle potential errors such as network failures or invalid API responses.
Error messages are displayed in the UI to inform users when something goes wrong.


1. Task List
Loads 3 'todo' items from the dummy REST API on the initial view.
Supports pagination for larger lists of tasks to keep the UI clean and user-friendly.
2. Add Task
Users can add new tasks via a form in the 'Add Task' view.
Input validation ensures that users submit only valid tasks.
3. Delete Task
Tasks can be removed from the 'My Tasks' section via a delete button, which makes a request to the REST API to remove the task.

Highly Valued
Form Validations: Ensures tasks have valid input before they can be added.
Error Handling: Proper error handling with user-friendly messages.
CI/CD pipelines: Set up for continuous integration and deployment.
Single Responsibility Principle: Each component and service has a specific responsibility, adhering to best coding practices.
Documentation: This README provides clear instructions for running the project and explains the code structure and purpose.


# React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

