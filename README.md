# openPortalAI

An Open AI Portal Framework Built Using Deterministic Pseudocode Prompting

## Overview

`openPortalAI` is a full-stack web application designed as a flexible framework for managing business portals, initially tailored for a utility billing company but adaptable for other industries like real estate or healthcare. The project provides a simple, user-friendly interface for authenticated users to access a dashboard, view placeholder data, and customize settings such as the background color, which persists across sessions via a backend API. Built with modern web technologies, this application serves as a foundation for future expansion with additional features and integrations.

The current version includes a login system, a basic dashboard with placeholder widgets, and a settings panel for toggling the background color. It focuses on core functionality and provides a stable base for adding more advanced features like data visualization, user profiles, or domain-specific tools.

## Features

- **User Authentication**:
  - Secure login with hardcoded credentials (`user`/`pass`).
  - Backend API endpoint (`/api/login`) for authentication.
  - Logout functionality to return to the login page.

- **Dashboard**:
  - A responsive grid layout with three widgets:
    - **Widget 1**: Placeholder for billing summary (e.g., "Placeholder data (e.g., billing summary)").
    - **Widget 2**: Placeholder for user stats (e.g., "More placeholder data (e.g., user stats)").
    - **Settings Widget**: Allows users to toggle the background color between white (`#ffffff`) and light blue (`#e0f7fa`).
  - Centralized logout button for easy navigation back to the login page.

- **Persistent Settings**:
  - Background color setting persists across sessions using a backend API (`/api/settings` GET/POST).
  - Temporary in-memory storage (`userSettings` object) simulates a database for settings.

- **Responsive Design**:
  - Built with React-Bootstrap for a mobile-friendly, professional UI.
  - Widgets are displayed in a three-column layout that adjusts to screen size.

## Technologies Used

### Backend
- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Web framework for creating RESTful APIs.
- **CORS**: Middleware to enable cross-origin requests between frontend and backend.
- **Dependencies** (installed but not fully utilized):
  - `mongoose`: For future MongoDB integration.
  - `dotenv`: For future environment variable management.

### Frontend
- **React.js**: JavaScript library for building the user interface.
- **React-Bootstrap**: Bootstrap components for React, providing responsive UI elements.
- **Bootstrap**: CSS framework for styling.
- **Axios**: HTTP client for making API requests to the backend.
- **React Scripts**: Create React App tooling for development and build processes.

## Project Structure

```
my-app-framework/
├── backend/
│   ├── index.js                # Express.js server with API endpoints
│   ├── package.json            # Backend dependencies
│   └── node_modules/           # Backend dependencies (not in Git)
├── frontend/
│   ├── public/
│   │   ├── index.html          # Default Create React App HTML
│   │   └── images/
│   │       └── construction-cone.png  # Image file (not used in current version)
│   ├── src/
│   │   ├── App.js              # Main app component with login/dashboard routing
│   │   ├── Login.js            # Login page component
│   │   ├── Dashboard.js        # Dashboard component with widgets and settings
│   │   └── index.css           # Custom CSS (minimal styling for dashboard)
│   ├── package.json            # Frontend dependencies
│   └── node_modules/           # Frontend dependencies (not in Git)
└── README.md                   # Project documentation
```

## Setup Instructions

### Prerequisites
- **Node.js** (v14.x or higher) and npm (v6.x or higher) installed on your system.
- A code editor (e.g., VS Code).
- Git for version control.

### Installation

1. **Clone the Repository** (or create a new project):
   ```bash
   git clone <repository-url>
   cd my-app-framework
   ```
   If starting fresh, create the directory structure:
   ```bash
   mkdir my-app-framework
   cd my-app-framework
   mkdir backend frontend
   ```

2. **Backend Setup**:
   - Navigate to the backend directory:
     ```bash
     cd backend
     npm init -y
     npm install express mongoose dotenv cors
     ```
   - Create `backend/index.js` with the server logic (see project files for content).

3. **Frontend Setup**:
   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     npx create-react-app .
     npm install axios react-bootstrap bootstrap
     ```
   - Clean up `src/` by removing unnecessary files and create or update the required files (see project files for content).

### Running the Application

1. **Start the Backend**:
   - In a terminal, navigate to the `backend` directory:
     ```bash
     cd backend
     npm install
     node index.js
     ```
   - The backend server will run on `http://localhost:5000`. Test by visiting `http://localhost:5000/api/hello` to see a JSON response: `{"message": "Hello from the backend!"}`.

2. **Start the Frontend**:
   - In a new terminal, navigate to the `frontend` directory:
     ```bash
     cd frontend
     npm install
     npm start
     ```
   - The frontend will run on `http://localhost:3000` and should automatically open in your default browser. If not, navigate to `http://localhost:3000` manually.

3. **Test the Application**:
   - On the login page, enter the credentials:
     - **Username**: `user`
     - **Password**: `pass`
   - Click "Login" to access the dashboard.
   - On the dashboard:
     - View the three widgets: "Widget 1" and "Widget 2" (placeholders), and "Settings" with a "Toggle Background Color" button.
     - Click the color toggle button to switch the background between white and light blue; this setting persists across sessions.
     - Click "Logout" to return to the login page.

## Usage

- **Login**: Use the hardcoded credentials (`user`/`pass`) to log in. The backend validates these credentials and returns a success response, allowing access to the dashboard.
- **Dashboard Navigation**:
  - The dashboard displays a simple layout with placeholder widgets for future data (e.g., billing summary, user stats).
  - The "Settings" widget allows customization of the background color, which is saved to the backend and persists across logins.
- **Logout**: Use the "Logout" button to return to the login page, clearing the session state.

## Future Enhancements

This project is a foundational framework with several opportunities for expansion:

- **Database Integration**: Replace the in-memory `userSettings` object with a MongoDB database using `mongoose` to store user settings and data.
- **Real Authentication**: Implement proper user authentication with JWT or OAuth, replacing the hardcoded credentials.
- **Dynamic Data**: Add real data to the widgets (e.g., billing summary, user stats) by integrating with APIs or a database.
- **Sidebar Navigation**: Introduce a sidebar for navigation between different sections (e.g., billing, history, user profile).
- **Advanced Features**:
  - Data visualization with charts (e.g., using Chart.js).
  - User profiles with customizable settings.
  - Industry-specific features (e.g., billing calculations for utilities, property listings for real estate).
- **Security**: Address the 12 vulnerabilities identified in `npm audit` by manually updating packages (`nth-check`, `postcss`, `serialize-javascript`, etc.) as described in previous steps.

## Known Issues

- **Vulnerabilities**: The frontend has 12 known vulnerabilities (6 moderate, 6 high) in dependencies like `nth-check`, `postcss`, and `serialize-javascript`. These can be fixed by updating the affected packages:
  ```bash
  npm install nth-check@2.0.1
  npm install postcss@8.4.31
  npm install serialize-javascript@6.0.2
  npm install workbox-build@7.0.0 workbox-webpack-plugin@7.0.0
  npm install svgo@2.8.0
  ```
  Run `npm audit` after updates to verify resolution.

- **Hardcoded Credentials**: The login system uses hardcoded credentials (`user`/`pass`), which should be replaced with a secure authentication mechanism in production.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and test thoroughly.
4. Commit your changes:
   ```bash
   git commit -m "Add your feature description"
   ```
5. Push to your fork and create a pull request:
   ```bash
   git push origin feature/your-feature-name
   ```

## License

This project is licensed under the MIT License. See the `LICENSE` file for details (create one if needed).

## Contact

For questions or support, please open an issue on the repository or contact the project maintainers.

---

### Notes
- The content you shared matches the Markdown I previously provided, except for the added header: **"An Open AI Portal Framework Built Using Deterministic Pseudocode Prompting"**. I’ve included it above to align with the GitHub version.
- The project structure references `my-app-framework/` as the root directory, but the GitHub repo uses `openPortalAI/`. I kept `my-app-framework/` in the structure to match our local setup (`/mnt/c/dev/personal/my-app-framework`), but if you prefer `openPortalAI/`, I can update it.
- The clone command uses `<repository-url>` as a placeholder. For your repo, it’s:
  ```bash
  git clone https://github.com/TorahDotOrg/openPortalAI.git
  ```

### Next Steps
- If you want me to confirm this content is correctly synced with your local `README.md` or push it to the GitHub repo (`https://github.com/TorahDotOrg/openPortalAI`), I can guide you through the steps (e.g., using a GitHub token or SSH).
- If you meant for me to compare this with another version or make changes, please clarify.
- If you’re ready to add new features or proceed with something else (e.g., fixing the `npm audit` vulnerabilities), let me know!
