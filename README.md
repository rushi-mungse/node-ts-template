# Node TypeScript Backend Template

This repository serves as a template for kickstarting Node.js backend development using TypeScript. It includes a setup for an Express app, Git actions, ESLint, Jest tests, Prettier, and a basic error handler/logger.

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v14 or higher)
-   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/rushi-mungse/node-ts-template.git
cd node-ts-template
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Setup .env
   Copy the .env.example file to .env and update the configuration values.

## Development

1. To run the development server:

```bash
npm run dev
# or
yarn dev
```

The server will be running at http://localhost:5001 by default.

## Testing

1. To run tests:

```bash
npm run test
# or
yarn test
```

2. To watch tests:

```bash
npm run test:watch
# or
yarn test
```

## To lint the code:

```bash
npm run lint
# or
yarn lint
```

## Formatting

To format the code using Prettier:

```bash
npm run format:fix
# or
yarn format
```

## Git Actions

This repository includes GitHub Actions workflows for automated CI/CD. The workflows include linting, testing, and deployment steps.

## Project Structure

-   `src/:` Contains the source code.
-   `src/routes/:` Define your Express routes here.
-   `src/controllers/:` Define your route handlers here.
-   `src/services/:` Business logic and data access layer.
-   `src/middlewares/:` Custom middleware functions.
-   `src/utils/:` Utility functions.
-   `test/:` Jest test files.

*   Error Handling and Logging
*   Error handling is implemented using a custom error handler middleware. Logging is done using winston and morgan for HTTP request logging.

## Contributing

> Feel free to contribute to this project. Create issues for any bugs or feature requests, and submit pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
