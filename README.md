# Process Monitor

Process Monitor is a simple web application built for the Operating Systems Lab.
The project simulates basic process scheduling concepts in a very simple way.

## Project Idea
This application allows the user to:
- Add simple processes
- Simulate process states such as READY and RUNNING
- View the process list through a web page

The main goal of the project is to practice Docker and GitHub workflow, not to build a complex system.

## Tech Stack
- Node.js
- Express.js
- Docker

## Project Structure
- src/ : application source code
- Dockerfile : used to build and run the project in Docker
- README.md : project documentation
- docs/notes.md : technical notes about Docker and GitHub
- docs/screenshots/ : screenshots required for submission

## How to Run the Project Using Docker

### Step 1: Build Docker Image
Open terminal inside the project folder and run:
```bash
docker build -t process-monitor .

### Step 2:Run Docker Container
docker run -p 3000:3000 process-monitor

### Step 3:Open the Application
http://localhost:3000

##How to Stop the Application
Press CTRL + C in the terminal

##Notes
The database is not included inside Docker.
Docker is used only to run the application.
The project was developed as a student assignment for OS Lab."# process-monitor" 
"# process-monitor" 
"# process-monitor"
## Production Deployment (Assignment 3)

This project was deployed to a production environment using Back4App Containers.

### Production URL
https://osprocessmonitor-qahrrb0z.b4a.run/

### Deployment Steps
1. The project repository was pushed to GitHub.
2. Back4App was connected to the GitHub repository.
3. The Docker image was built automatically using the Dockerfile.
4. The container was deployed and exposed on port 3000.
5. The application was verified through the browser using the production URL.

