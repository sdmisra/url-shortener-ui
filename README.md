The back-end server is already setup and ready to go from the back-end team. [The back-end server is located here](https://github.com/turingschool-examples/url-shortener-api).

## Setup

* Fork, then clone down this repo and change into the cloned down directory
* Run `npm install` to install dependencies
* Run `npm start` to start your development server

Be sure to setup the back-end repo for URL Shortener (NOT nested in the FE repo) to be able to retrieve and save shortened URLs.

## Iterations

### Iteration 0

Make sure to read through all iterations before starting. There is additional API documentation in the README of the BE server; it's highly recommended that you read that closely as well. 

### Iteration 1

A developer just left the company, and they started this front-end. Unfortunately, they didn't document their process or where they left off. 

- Read through the front-end code base. Take a look at what urls are currently stored in the server. 
- Connect the front end to the back end. When the App loads, grab any existing urls on the server, and display them on the DOM. 

### Iteration 2

Right now the App component can receive information from the server, but not send information to it. 

- When the form is submitted, the new url should POST to the the server.
- On a _successful_ POST, the new shortened url should be added to the DOM as well. 

### Iteration 3

Write Cypress tests for the following user flows (don't forget to stub your network requests):

* When a user visits the page, they can view the page title and the existing shortened URLs
* When a user visits the page, they can view the Form with the proper inputs
* When a user fills out the form, the information is reflected in the input fields

### Iteration 4

Write Cypress tests for the following user flows (don't forget to stub your network requests):

* When a user fills out and submits the form, the new shortened URL is rendered

## Shane Misra - I believe this is where I got to today, 6/12, for the final assessment!!!! 🤩

### Iteration 5 (extension)

Add and test sad path functionality. For example:
- What should happen if the server sends back a failed request?
- What should happen if the user tries to submit an incomplete form?

### Iteration 6 (extension)

Add and test delete functionality for a URL (the server side endpoint already exists).
