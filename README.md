# share-network

## Description

This is a Social Network API social network app that let users to share their thoughts, react to friends’ thoughts, and create a friend list.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#contributions)
- [Technology Utilized](#technologies_utilized)
- [Link to walkthrough video](#link)

## Installation

1. Git clone this repository onto your local machine and open the terminal to be able to run the commands that are outlined below

2. In order for the app to function correctly, ensure you have the latest or most stable version of Node.js. 

3. Run `npm install` to download.

5. To start the application, run: `npm start`

## Usage

This application has been designed in such a manner that it allows you to navigate different link routes to display data from the database. 

- GET/ POST routes: <br>
    `http://localhost:3001/api/users` <br>
    `http://localhost:3001/api/thoughts`<br>

     - If you wish to <u>GET</u> a certain id you can do so by adding an `/id` at the end of the link. 

- PUT/DELETE routes: <br>
    `http://localhost:3001/api/users/:id`<br>
    `http://localhost:3001/api/thoughts/:id` <br>

- POST/ DELETE routes: <br>
    `http://localhost:3001/api/users/:id/friends/:friendId` <br>
    `http://localhost:3001/api/thoughts/:id/reactions` <br>

    - The route above is used to <u>POST</u> a new reaction. If you wish to <u>DELETE</u> a certain  reaction you can do so by adding an `/id` at the end of the link. 

## Credits


## License

MIT License

## How to Contribute
clone repo, add connection to original owner's repo, make changes and push 

## Technologies Utilized
- JavaScript
- Insomnia 
- Express.js 
- Moment.js
- MongoDB Database



## Walk through video
[Video 1.webm](https://user-images.githubusercontent.com/103380089/197908821-9609aab0-574b-4962-b0c1-5a829f046b8d.webm)

[Video 2.webm](https://user-images.githubusercontent.com/103380089/197908844-30159b19-91c7-4d27-9a13-167dc9b4b695.webm)
