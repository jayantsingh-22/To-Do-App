```markdown
# To-Do List Application

This is a simple To-Do List application that allows users to manage their tasks. The application supports creating, reading, updating, and deleting (CRUD) tasks. Each task has a title, description, status (e.g., pending, in-progress, completed), and due date.

## Features

- **Task List Page**:
  - Display a list of all tasks with their title, status, and due date.
  - Include buttons for editing and deleting each task.
  - Add a button to create a new task.
- **Task Form Page**:
  - A form for creating and editing tasks with fields: Title, Description, Status, and Due Date.
  - The form is used for both creating a new task and updating an existing task.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Data Storage**: In-memory data storage

## Setup and Installation

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Install frontend dependencies:
    ```bash
    cd ../frontend
    npm install
    ```

4. Create a `.env` file in the root of the frontend directory and add the following:
    ```
    REACT_APP_API_URL=http://<your-machine-ip>:3001
    ```

5. Replace `<your-machine-ip>` with the actual IP address of your machine running the backend server.

### Running the Application

1. Start the backend server:
    ```bash
    cd backend
    node index.js
    ```

2. Start the frontend development server:
    ```bash
    cd ../frontend
    npm start
    ```

3. Open your browser and navigate to `http://<your-machine-ip>:3000`.

### Accessing the Application

Ensure that your machine's firewall allows incoming connections on the ports used by your backend (3001) and frontend (3000) servers. You can now access the application from other devices on the same network by navigating to `http://<your-machine-ip>:3000`.

## API Endpoints

- **GET /tasks**: Retrieve all tasks.
- **GET /tasks/:id**: Retrieve a single task by ID.
- **POST /tasks**: Create a new task.
- **PUT /tasks/:id**: Update an existing task by ID.
- **DELETE /tasks/:id**: Delete a task by ID.

## Frontend Components

### TaskList Component

Displays a list of all tasks with options to edit and delete each task. Includes a button to create a new task.

### TaskForm Component

Provides a form for creating and editing tasks with fields for title, description, status, and due date. Handles both creation and updating of tasks.

## Styling

Custom CSS is used to enhance the appearance of the application. Task statuses are color-coded for better visual distinction:
- **Pending**: Dark-grey
- **In-progress**: Blue
- **Completed**: Green

## License

This project is licensed under the MIT License.
```