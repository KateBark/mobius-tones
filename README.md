# MobiusTones

Welcome to MobiusTones! A digital video platform exclusively designed to showcase and celebrate indie musicians.

## Table of Contents

- Prerequisites
- Installation guide
- Server side start-up
- Client side start-up

### Prerequisites

Before you begin, make sure you have the following installed on your computer:
- Node.js
- npm (Node Package Manager), note: this is included with Node.js installion
- a relational database management system (this project was created using MySQL)

#### Installation Instructions

- Clone the repository:

    ```bash
    git clone https://github.com/KateBark/mobius-tones

##### Server side
- In one terminal tab

    ```bash
    cd server
    npm i
    npm run migrate
    npm run seed
    node server
    ```

##### Client side
- In another terminal tab

    ```bash
    cd client
    npm run start
    ```
