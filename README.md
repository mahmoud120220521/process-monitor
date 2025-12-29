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
