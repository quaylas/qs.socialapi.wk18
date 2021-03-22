# WK 18 | Social Network API | QS

  ## Description

  [![License: ISC](https://img.shields.io/badge/license-ISC-0d0042)](https://opensource.org/licenses/ISC)

  This is a simple social network api built using Express, Mongoose, and NoSQL. You can view a demo of this application [here](https://drive.google.com/file/d/1c6t4z6UNz2ZUhGpsT6uqe6BJpLq1eJSu/view).
  

  ## Table of Contents
  * [User Story and Acceptance Criteria](#user-story-and-acceptance-criteria)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)

  ## User Story and Acceptance Criteria

  ### User Story
  ```
  AS A social media startup
  I WANT an API for my social network that uses a NoSQL database
  SO THAT my website can handle large amounts of unstructured data
  ```

  ### Acceptance Criteria
  ```
  WHEN I enter the command to invoke the application
  THEN my server is started and the Mongoose models are synced to the MongoDB database
  ```
  ```
  WHEN I open API GET routes in Insomnia Core for users and thoughts
  THEN the data for each of these routes is displayed in a formatted JSON
  ```
  ```
  WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
  THEN I am able to successfully create, update, and delete users and thoughts in my database
  ```
  ```
  WHEN I test API POST and DELETE routes in Insomnia Core
  THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

  ```
  ## Installation

  This application is run using Node.js with Mongoose and Express packages. Visit the [Node.js website](http://www.nodejs.org/download/) for download and installation instructions. 
  
  Once you've installed Node.js, clone the repository and install its dependencies by running 
    
  `$npm install`
  
  from the command line in your root directory.

  ## Usage

  When installation is complete, the application is initialized by the command $npm start. Once the application is running, all API routes can be tested using a tool like [Insomnia](https://insomnia.rest/).  

  ## Contributions

  Contributions to this application are governed by [The Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)

  ## Tests

  There are currently no tests available for this application.

  ## Questions

  This project was developed by [quaylas](https://github.com/quaylas). 

  Questions may be directed to [quayla@cxadvisors.com](mailto:quayla@cxadvisors.com).

  ## License

  This application is licensed under the [ISC License](https://opensource.org/licenses/ISC).
  

