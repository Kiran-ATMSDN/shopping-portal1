# Shopping Portal API

## Setup Instructions
- Clone the repository to your local machine.
- Install dependencies using `npm install`.
- Configure the database connection in the `config/config.js` file.
- Start the server using `node app.js`.

## API Endpoints

### Create Task
- Endpoint: POST /tasks
- Description: Create a new task.
- Request Body:
  ```json
  {
    "title": "Task Title",
    "description": "Task Description",
    "status": "pending"
  }
