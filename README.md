# Angular Dashboard Application

## Description

This is a dashboard application built with Angular 18.0.3. This dashboard is designed to manage products and their respective categories. Along with the product and category management, the application provides visual data analysis using Chart.js 4.4.3.

## Features

- Product Management: The application allows the user to view products.
- Category Management: The application allows the user to view different product categories.
- Data Visualization: The application uses Chart.js to represent data in a more understandable format.

### Prerequisites

Things you need to install the software:

- Node.js and npm
- Angular v18.0.0
- TypeScript v5.4.2

### Install

A step by step explanation of how to get a development environment running:

```bash
npm install
```

### Development

```bash
npm start
```

## Running the tests

How to run the automated tests for this system

```bash
npm test
```

## Deployment

### `build-image`

This script uses Docker to build an image of the application with "dashboardapp:prod" as the tag. It targets the production environment specified in the Docker file.

### `run-container`
This script runs a Docker container named "dashboardapp". The container starts in daemon mode, which means it runs in the background. The application in the container is exposed on port 8080, which is mapped to port 80 in the container.

### `remove-image`
This script removes the Docker image tagged as "dashboardapp:prod". Please note that you cannot remove a Docker image if there's a container currently using it. You would have to stop and delete the container first.

### `remove-container`
This script stops and removes the Docker container named "dashboardapp". The "-f" option is used to forcibly stop the container if it's currently running.

### `docker:prod`
This script is a combination of the build-image and run-container scripts. It builds the Docker image and then runs the container.

### `docker-clean:prod`
This script is a combination of the remove-container and docker:prod scripts. It stops and removes the Docker container if it exists and then rebuilds the Docker image and runs the container.
## Built With

- [Angular](https://angular.io/) - The web framework used
- [npm](https://www.npmjs.com/) - Dependency Management
- [TypeScript](https://www.typescriptlang.org/) - Used for static typing JavaScript codes.

## Authors

Guillem Moya

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
