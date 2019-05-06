# CS591 homework 5

>>> MongoDB
open a terminal
run "mongod"
make sure it is on port 27017

>>> Backend
open a new terminal
cd into directory "simpleback"
run "DEBUG=simpleback:* npm start"
It runs on port 8080

>>> Frontend (Angular)
open a new terminal
cd into directory "frontend"
run "ng serve --open"
It runs on port 4200

>>> Check result
open website "localhost:4200"
click button "Login with Google"
Angular use window.location.assign to redirect to backend oauth
