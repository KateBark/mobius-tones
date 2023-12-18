# MobiusTones

Welcome to MobiusTones! A digital platform exclusively designed to showcase and celebrate indie musicians.

# PLEASE NOTE:
- For Capstone submission, data will be rendered via front-end json files. The below instructions are intended for 
when database migrations and seeding are confirmed working.
- I have commented out axios and axios-related references (i.e. const url = http://localhost:8080) so as to keep
them for when database connection is confirmed.


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
- Edit the 
- In another terminal tab

    ```bash
    cd client
    npm run start
    ```
