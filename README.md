# Flickr Search App

React.js app running on Express server that pulls photos from flickr gallery using flickr API. 
I am using React because it is the framework I am most familiar and comfortable with.  
Express is a lightweight server that is very easy to set up. The back end hides my api key and it resolves issues with CORS.

## Installation

First clone this project. To run this app you will need to install the following dependencies in the aplication root folder:
```
 sudo apt update
 sudo apt install nodejs
 sudo apt install npm
 npm install express
 npm install body-parser
 npm install cors
 npm install node-fetch@2.0
```

Once you installed the dependencie above go to client folder and run
```
npm install 
```
This will make sure you have all the front end dependencies requiered. 

## Running the app

To start the back end run the following
```
  cd server
  node index.js
```
To start the front end in developer mode run
```
  cd client 
  npm start
```
To start the front end in production run
```
  cd client
  npm run built
```

## Features to Develop
- Infinite Scroll

## Screenshots
### Desktop view
![Desktop](https://github.com/DanaVarahi/screenshots/blob/main/Flickr-desktop.png)

### Mobile View
![Mobile](https://github.com/DanaVarahi/screenshots/blob/main/Flickr-mobile.png)

### Single photo on desktop
![Single Photo Desktop](https://github.com/DanaVarahi/screenshots/blob/main/Fliskr-desktop-single.png)

### Single photo on a mobile
![single Photo Mobile](https://github.com/DanaVarahi/screenshots/blob/main/Flickr-mobile-single.png)

### Search feature
![Search](https://github.com/DanaVarahi/screenshots/blob/main/Flickr-Search.png)
