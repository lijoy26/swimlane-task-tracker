# Swimlane Task Tracker

Swimlane Task Tracker is a user interface (UI) that facilitates the drag-and-drop functionality of blocks across different lanes representing various stages or states. The UI is designed to enhance user experience and productivity by effectively managing block transitions, data interactions, and historical tracking within the system.

## Features

- **Drag-and-Drop Functionality (Completed):** Easily move blocks between lanes representing different stages or states using drag-and-drop.
- **Configurability (In Progress):** The UI is configurable via a master configuration, allowing or restricting blocks from moving to unspecified stages or states based on predefined rules.
- **Data Entry Prompt (In Progress):** Upon moving a block to a new state, the UI prompts the user to provide necessary data that enables the transition for the block. This data entry process is seamlessly integrated into the UI workflow.
- **Block Preview (In Progress):** Users can click on a block within the swimlanes to preview its details. The block preview includes a history of all previous transitions for the block, providing users with a comprehensive view of its journey within the system.
- **Top-Level Filter Mechanism (In Progress):** The UI includes a top-level filter mechanism that enables users to select and display blocks based on specified attributes.

## Technologies Used

- Next.js: Frontend framework for building React applications (v14.2.2)
- React: JavaScript library for building user interfaces (v18.2.0)
- TypeScript: Typed superset of JavaScript that compiles to plain JavaScript (v5)
- Bootstrap: CSS framework for styling the application (v5.3.3)
- React Bootstrap: React components for Bootstrap (v2.10.2)
- React DnD: Drag-and-drop library for React (v16.0.1)
- React DnD HTML5 Backend: HTML5 backend for React DnD (v16.0.1)

## Installation

To run the Swimlane Task Tracker locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone git@github.com:lijoy26/swimlane-task-tracker.git

2. Install dependencies:

    ```bash
    cd swimlane-task-tracker
    npm install

3. Start the development server:

    ```bash
    npm start

4. Open your browser and navigate to http://localhost:3000 to view the application.

## Usage

- Configure the swimlane UI using the master configuration.
- Drag and drop blocks between lanes representing different stages or states.
- Provide necessary data upon moving a block to a new state.
- Click on a block to preview its details, including its transition history.
- Use the top-level filter mechanism to select and display blocks based on specified attributes.

## Contributing

Contributions to the Swimlane Task Tracker project are welcome. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

