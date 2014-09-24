<<<<<<< HEAD
[![MEAN.JS Logo](http://meanjs.org/img/logo-small.png)](http://meanjs.org/)

[![Build Status](https://travis-ci.org/meanjs/mean.svg?branch=master)](https://travis-ci.org/meanjs/mean)
[![Dependencies Status](https://david-dm.org/meanjs/mean.svg)](https://david-dm.org/meanjs/mean)

MEAN.JS is a full-stack JavaScript open-source solution, which provides a solid starting point for [MongoDB](http://www.mongodb.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), and [AngularJS](http://angularjs.org/) based applications. The idea is to solve the common issues with connecting those frameworks, build a robust framework to support daily development needs, and help developers use better practices while working with popular JavaScript components. 

## Before You Begin 
Before you begin we recommend you read about the basic building blocks that assemble a MEAN.JS application: 
* MongoDB - Go through [MongoDB Official Website](http://mongodb.org/) and proceed to their [Official Manual](http://docs.mongodb.org/manual/), which should help you understand NoSQL and MongoDB better.
* Express - The best way to understand express is through its [Official Website](http://expressjs.com/), particularly [The Express Guide](http://expressjs.com/guide.html); you can also go through this [StackOverflow Thread](http://stackoverflow.com/questions/8144214/learning-express-for-node-js) for more resources.
* AngularJS - Angular's [Official Website](http://angularjs.org/) is a great starting point. You can also use [Thinkster Popular Guide](http://www.thinkster.io/), and the [Egghead Videos](https://egghead.io/).
* Node.js - Start by going through [Node.js Official Website](http://nodejs.org/) and this [StackOverflow Thread](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js), which should get you going with the Node.js platform in no time.


## Prerequisites
Make sure you have installed all these prerequisites on your development machine.
* Node.js - [Download & Install Node.js](http://www.nodejs.org/download/) and the npm package manager, if you encounter any problems, you can also use this [Github Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* MongoDB - [Download & Install MongoDB](http://www.mongodb.org/downloads), and make sure it's running on the default port (27017).
* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages, in order to install it make sure you've installed Node.js and npm, then install bower globally using npm:

```
$ npm install -g bower
```

* Grunt - You're going to use the [Grunt Task Runner](http://gruntjs.com/) to automate your development process, in order to install it make sure you've installed Node.js and npm, then install grunt globally using npm:

```
$ sudo npm install -g grunt-cli
```

## Downloading MEAN.JS
There are several ways you can get the MEAN.JS boilerplate: 

### Yo Generator 
The recommended way would be to use the [Official Yo Generator](http://meanjs.org/generator.html) which will generate the latest stable copy of the MEAN.JS boilerplate and supplies multiple sub-generators to ease your daily development cycles.

### Cloning The GitHub Repository
You can also use Git to directly clone the MEAN.JS repository:
```
$ git clone https://github.com/meanjs/mean.git meanjs
```
This will clone the latest version of the MEAN.JS repository to a **meanjs** folder.

### Downloading The Repository Zip File
Another way to use the MEAN.JS boilerplate is to download a zip copy from the [master branch on github](https://github.com/meanjs/mean/archive/master.zip). You can also do this using `wget` command:
```
$ wget https://github.com/meanjs/mean/archive/master.zip -O meanjs.zip; unzip meanjs.zip; rm meanjs.zip
```
Don't forget to rename **mean-master** after your project name.

## Quick Install
Once you've downloaded the boilerplate and installed all the prerequisites, you're just a few steps away from starting to develop you MEAN application.

The first thing you should do is install the Node.js dependencies. The boilerplate comes pre-bundled with a package.json file that contains the list of modules you need to start your application, to learn more about the modules installed visit the NPM & Package.json section.

To install Node.js dependencies you're going to use npm again, in the application folder run this in the command-line:

```
$ npm install
```

This command does a few things:
* First it will install the dependencies needed for the application to run.
* If you're running in a development environment, it will then also install development dependencies needed for testing and running your application.
* Finally, when the install process is over, npm will initiate a bower installcommand to install all the front-end modules needed for the application

## Running Your Application
After the install process is over, you'll be able to run your application using Grunt, just run grunt default task:

```
$ grunt
```

Your application should run on the 3000 port so in your browser just go to [http://localhost:3000](http://localhost:3000)
                            
That's it! your application should be running by now, to proceed with your development check the other sections in this documentation. 
If you encounter any problem try the Troubleshooting section.

## Development and deployment With Docker

* Install [Docker](http://www.docker.com/)
* Install [Fig](https://github.com/orchardup/fig)

* Local development and testing with fig: 
```bash
$ fig up
```

* Local development and testing with just Docker:
```bash
$ docker build -t mean .
$ docker run -p 27017:27017 -d --name db mongo
$ docker run -p 3000:3000 --link db:db_1 mean
$
```

* To enable live reload forward 35729 port and mount /app and /public as volumes:
```bash
$ docker run -p 3000:3000 -p 35729:35729 -v /Users/mdl/workspace/mean-stack/mean/public:/home/mean/public -v /Users/mdl/workspa/mean-stack/mean/app:/home/mean/app --link db:db_1 mean
```

## Getting Started With MEAN.JS
You have your application running but there are a lot of stuff to understand, we recommend you'll go over the [Offical Documentation](http://meanjs.org/docs.html). 
In the docs we'll try to explain both general concepts of MEAN components and give you some guidelines to help you improve your development procees. We tried covering as many aspects as possible, and will keep update it by your request, you can also help us develop the documentation better by checking out the *gh-pages* branch of this repository.

## Community
* Use to [Offical Website](http://meanjs.org) to learn about changes and the roadmap.
* Join #meanjs on freenode.
* Discuss it in the new [Google Group](https://groups.google.com/d/forum/meanjs)
* Ping us on [Twitter](http://twitter.com/meanjsorg) and [Facebook](http://facebook.com/meanjs)

## Live Example
Browse the live MEAN.JS example on [http://meanjs.herokuapp.com](http://meanjs.herokuapp.com).

## Credits
Inspired by the great work of [Madhusudhan Srinivasa](https://github.com/madhums/)
The MEAN name was coined by [Valeri Karpov](http://blog.mongodb.org/post/49262866911/the-mean-stack-mongodb-expressjs-angularjs-and)

## License
(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
=======
Software Engineering readme.md

	1.	Name : Lauren Gutlohn
	    Gatorlink : lgutlohn
	
	2.	Name : Eric Smith
	    Gatorlink : smith1302
	
	3.	Name : Jesse Everett
	    Gatorlink : jesseceverett
	
	4.	Name : Kathleen Lew
	    Gatorlink : katlew3

Project Description
==============

Client: Christan Grant

Project: Data Clustering Service

Description:

We have a stream of "mentions" of people names coming in. We want to cluster the mentions that refer to the same person. For example, "The President" and "Barack Obama" would be clustered together as well as "His Airness" and "Michael Jordan". The twist is as you visualize this data coming in, some clusters would be incorrect --- in this case the user can click to destroy the bad cluster. Or the user can combine two or more clusters to create a new larger cluster.

This is a multi user application and a crowd sourcing game to help organize data. This is a project have on the back burner. But I'll be writing a paper up on this work to publish at a conference.

Below are some points about it:
1) Data is streaming in from an external location (a URL or disk).
2) The data is both displayed to each user logged into the session and saved to the DB
3) Each user is watching each piece of data appear on the screen. When a new user logs in they have to read the current state from the DB and join-in with everybody else.
4) Everyone is trying to cluster the data at the same time. With each action, (i.e cluster combine or cluster destroy) the data is updated dynamically to all users. The current/latest status is always read from the DB.
5) User should be able to zoom in and examine certain clusters.  This is a query to the DB to get the points within a space.
6) Users should be able to edit the documents AND the data. Including adding notes to data to clarify points for other users.
7) Users should be able to link clusters to pictures/data items using the freebase api or a similar service. 

This project is highly concurrent, using the DB to
1) To manage the (complex and transient) state
2) Query the specific portions of the data set
3) Support ad hoc additions from multiple concurrent users


User Stories
==============

**Upon Start**

	- User can login to clustering section
		- May be multiple sections
		- Create new
	- Words (with pictures) come in
	- Directions?
		- Before or after
	- No automatic pictures (suggest pictures?)

**Multiple User Simulatneously?**

	- Could use Socket.io

**All users equal**

	- One admin
		- Ban users
		- Pause/Stop sessions
		- Add/Remove admins
		- Seal Cluster (cannot be destroyed)
	- Add to Cluster
	- Take away
	- Create New
	- Manipulate Pictures
		- Find/Request Pictures

**Log actions?**
>>>>>>> c0f5ab6babaad56cd030d99ee0c784a5c1bd2927
