# Title

Task Manager Frontend (React / Next.js)

## Objective

To build a simple task management frontend in **Next.js** using **React and Tailwind CSS**, allowing users to create, view, edit, delete, and filter tasks.

## Tech Stack

- Next.js (React)
- Tailwind CSS
- JavaScript
- HTML/CSS

## Completion Instructions

### Functionality

#### Must Have

- Pages:
  - `/home`: View all tasks
  - `/add`: Form to add new task
  - `/edit/:id`: Form to edit a task (reuse the same form)
- Features:
  - View task list
  - Add new task
  - Edit task
  - Delete task
  - Filter tasks by `status` (`todo`, `in_progress`, `done`)

#### Nice to Have

- Input validation (e.g., required fields)
- Responsive design
- Confirmation before delete

### Guidelines to develop a project

#### Must Have

- Use **Next.js**
- Use **Tailwind CSS** or plain CSS
- Do **not use** component libraries like MUI, Chakra, etc.
- All data fetches should be client-side (`useEffect`)
- Submit `.env.local.example` for API URL

#### Nice to Have

- Reusable components
- Mobile responsive UI
- Form error messages

### Submission Instructions

#### Must Have

- Include `.env.local.example`
- Provide:
  - `npm install`
  - `npm run dev`
- Provide `README.md` with:
  - Setup
  - Pages
  - Features

#### Nice to Have

- Add screenshots or demo video

## Resources

### Design files

None provided.

### APIs

Make requests to:
- `GET /tasks`
- `POST /tasks`
- `PUT /tasks/:id`
- `DELETE /tasks/:id`

Base URL: `https://task-manager-backend-rq2j.onrender.com`

### Third-party packages

- Tailwind CSS
- Axios  API calls

### Optional Features Implemented

   **Form Validation**:
  - All required fields (`title`, `status`) are enforced in the form using `required` attributes.
  - Prevents form submission if values are missing.

   **Task Filtering**:
  - Added a simple status filter on the home page.
  - Users can filter tasks by `todo`, `in_progress`, or `done`.
  - Filtering is handled on the client side.

   **Responsive Design**:
  - Fully responsive using css Modules classes.
  - Layout adjusts for mobile, tablet, and desktop.
  - Tested with different screen sizes for flexibility.

### Important Note

The previously submitted backend link  
https://task-manager-backend-rq2j.onrender.com  
is no longer active due to Render platform limits.

### Updated Backend Link

Please use this working backend URL:  
https://task-manager-backend-1-w09d.onrender.com

### Project Status

The project is now fully functional again.  
UI video remains valid and shows the complete working flow.  
Thank you for your understanding.
