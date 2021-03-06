# AdoptAFriend :dog:

## Description of Site
"AdoptAFriend" is a full stack application to help San Franciscans find their new best friend (doge)! 

The site was built with data (dog information) scraped from three dog adoption agency sites in San Francisco (Petsmart, Rocket Dog Rescue, and Humane Society of Silicon Valley) using Cheerio (node package). 

MongoDB was used to store data and allow users to read, write, and delete comments on specific dogs for him/ her to come back to later. 

**MongoDB Models**

Doge Schema
```
var DogeSchema = new Schema({
    name: {
        type: String,
    },
    breed: {
        type: String, 
    },
    imgLink: {
        type: String,
    },
    moreInfo: {
        type: String, 
    },
    site: {
        type: String,
    },
    comment: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }]
});
```
Comment Schema

```
var CommentSchema = new Schema({
    body: {
        type: String,
        required: true
    }
})
```

## Pictures of Site
[Click here to visit site](https://adopt-a-friend.herokuapp.com/)

**Initial home page:**
![Home page](public/style/images/site-images/site1.png)

**Seeing dogs by adoption agency or by breed:**
![By agency](public/style/images/site-images/site2.gif)

**Reading, creating, and deleting comments on dogs:** 
![By breed](public/style/images/site-images/site3.gif)

**Form validation to ensure that comments are not empty:** 
![Comments](public/style/images/site-images/site4.gif)

## Improvements for the Future
Some improvements that I would like to make to this application provided more time: 

1. Incorporate user authentication to allow users to save certain dogs on their account to visit later
2. Ability to update the comments that users have already left on a dog
3. Refactoring code to use ES6 syntax

## Getting Started
These instructions will help get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites 
What you will need to install before running this application:

1. [NODE](https://nodejs.org/en/download/)
2. [NPM](https://docs.npmjs.com/cli/install)
3. [Mongod](https://www.mongodb.com/download-center/community)

Once the above are installed, install server dependencies:
```
# open a new shell and navigate to AdoptAFriend directory
$ npm i
# this will install all the dependencies for the server portion of this application
```

Make sure that MongoDB is started on your machine before starting the server:
```
$ mongod
# once server dependencies are installed and MongoDB is started, navigate to the AdoptAFriend directory and start the server
$ node server.js
```


## Built with: 
1. [HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
2. [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
3. [Bootstrap](https://getbootstrap.com/)
4. [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
5. [jQuery](https://api.jquery.com/)
6. [MongoDB](https://docs.mongodb.com/)
8. [Node*](https://nodejs.org/en/download/)

## *Node Packages Used
1. [Express](https://expressjs.com/)
2. [Cheerio](https://www.npmjs.com/package/cheerio)
3. [Axios](https://www.npmjs.com/package/axios)
4. [Mongoose](https://mongoosejs.com/docs/)
5. [Path](https://nodejs.org/api/path.html)
6. [Logger](https://www.npmjs.com/package/logger)

## Author(s): 
1. [Minori Hashimoto](https://github.com/minori-fh)

