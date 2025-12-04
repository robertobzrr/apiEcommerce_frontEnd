# apiEcommerce_frontEnd

A simple Angular front-end for an e-commerce API. This is my first Angular project where I'm learning how FormsModule works in practice and implementing basic Create and Read operations against a working API.

Screenshots

<img width="2249" height="1140" alt="image" src="https://github.com/user-attachments/assets/18f4c636-1e9c-47a7-b805-672d9822048b" />
<img width="2067" height="1377" alt="image" src="https://github.com/user-attachments/assets/cd68a6d9-9814-4964-a638-85e5b5dd0349" />
<img width="744" height="810" alt="image" src="https://github.com/user-attachments/assets/494e1415-fe21-446b-8628-93e60df8c106" />

API is working well. I implemented the Create and Read methods and they're working.

<img width="1496" height="758" alt="image" src="https://github.com/user-attachments/assets/6a1b2f1f-36e4-41ba-a240-c32901da0cd9" />
<img width="1824" height="1461" alt="image" src="https://github.com/user-attachments/assets/696f6112-91e4-468c-bdf3-3fa3bcd1eb62" />

Both buttons working with different register pages working using the API.

<img width="2142" height="816" alt="image" src="https://github.com/user-attachments/assets/dd8f73a7-d13d-495b-b2f9-24a2384ffd83" />

---

Table of Contents

- About
- Features
- Prerequisites
- Getting Started
- Configuration
- Usage
- Project Structure
- Development
- Tests
- Known Issues / TODO
- Contributing
- License
- Contact

About

This repository contains the front-end (Angular) part of a simple e-commerce app that talks to a separate API. The goal of this project is to practice Angular fundamentals (components, services, forms, HTTP) and implement CRUD operations against an API.

Features

- Angular (FormsModule)
- Create and Read operations implemented against the API
- Basic routing and multiple register pages
- Simple, easy-to-follow codebase for learning purposes

Prerequisites

- Node.js (v14+ recommended)
- npm (v6+)
- Angular CLI (optional, for development): npm install -g @angular/cli

Getting Started

1. Clone the repository

   git clone https://github.com/robertobzrr/apiEcommerce_frontEnd.git
   cd apiEcommerce_frontEnd

2. Install dependencies

   npm install

3. Configure the API base URL (see Configuration below)

4. Run the development server

   ng serve --open

   or if you don't have the Angular CLI globally:

   npm start

The app will open at http://localhost:4200 by default.

Configuration

The app expects an API to be available. By default, the base URL is configured in src/environments/environment.ts. Update that file to point to your API instance, for example:

export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:3000/api'
};

Adjust the URL to match your API's address and routes.

Usage

- Navigate the app to view the product list (Read).
- Use the register/create form(s) to add new products (Create).
- The HTTP calls are handled via Angular services (see src/app/services).

Project Structure (high level)

- src/
  - app/
    - components/     # Angular components
    - services/       # HTTP services communicating with the API
    - models/         # TypeScript interfaces / models
    - app.module.ts
    - app-routing.module.ts
  - assets/
  - environments/

Development

- ng serve --open : run development server
- ng build : build application for production
- ng build --prod : production build

Tests

- This project does not include automated tests yet. Add tests with Angular's default testing setup (Karma/Jasmine) if you want to expand this project.

Known Issues / TODO

- Implement Update and Delete operations (currently only Create and Read are implemented).
- Add form validation feedback (some basic validation is present; improve UX).
- Add unit and e2e tests.
- Improve responsive styles and accessibility.

Contributing

Contributions are welcome. If you'd like to contribute:

1. Fork the repository
2. Create a branch: git checkout -b feature/your-feature
3. Commit your changes
4. Push to the branch and open a pull request

License

This project is currently unlicensed. If you want a license, consider adding an open-source license such as MIT.

Contact

Author: robertobzrr

If you'd like me to change the README (add badges, CI, more detailed setup for the API, or include sample API responses), tell me what you'd like and I will update it.