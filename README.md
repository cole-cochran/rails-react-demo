## Ruby on Rails React Demo with Docker and GitLab CI/CD

## Description

This project was created to leverage the benefits of Ruby on Rails to build a full stack web application, with a clean and functional React frontend. Utilizing Docker to create a secure, isolated environment containerizing the the entire application. With the help of GitLab, the application can be compiled and shipped.

### Table of Contents

- [Installation](#install)

- [Contributers](#contributers)

- [Usage](#usage)

- [License](#license)

- [Tests](#tests)

- [Profile](#profile)

- [Contact](#contact)

### Install

Running the application locally is simple. Clone the repo listed in this README, install Docker locally and run docker compose up from the CLI to start the application and install dependencies. The application will be served at http://localhost:3000/ rendering the React frontend with the seeded database, and Ruby on Rails backend.

### Create Database if not found

`docker-compose run web rake db:create`

### Rails command to create database models

`rails g scaffold Bikes brand:string model:string price:integer quantity:integer & rake db:migrate`

### Seeds example

`Bike.create(brand: 'Revel', model: 'Rascal', price: 5500, quantity: 9)
Bike.create(brand: 'Specialized', model: 'StumpJumper', price: 4000, quantity: 12)
Bike.create(brand: 'Revel', model: 'Rail', price: 5200, quantity: 6)
Bike.create(brand: 'Trek', model: 'Fuel', price: 3200, quantity: 7)
Bike.create(brand: 'Cannondale', model: 'Jekyll', price: 4000, quantity: 3)
Bike.create(brand: 'Revel', model: 'Ranger', price: 4900, quantity: 3)`

### Usage

This appliation has a bike shop inventory with bikes, prices, and brands available in inventory.Inventory can be removed, and updated to the database via the frontend.

### License

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

### Profile

[GitHub](https://github.com/https://github.com/https://github.com/cole-cochran/rails-react-demo)

### Contact

[Contact Me](mailto:colecochran405@gmail.com)
