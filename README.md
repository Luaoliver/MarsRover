![MarsRover](https://github.com/Luaoliver/MarsRover/assets/77366806/8674aed2-72d4-4d9f-a9e7-f388d9a7ed60)

# Mars Rover em React e Adonis

## A squad of robotic rovers are to be landed by NASA on a plateau on Mars.

This plateau, which is curiously rectangular, must be navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth.

A rover’s position and location is represented by a combination of x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.

In order to control a rover , NASA sends a simple string of letters. The possible letters are ‘L’, ‘R’ and ‘M’. ‘L’ and ‘R’ makes the rover spin 90 degrees left or right respectively, without moving from its current spot. ‘M’ means move forward one grid point, and maintain the same heading.

The project was developed with the following tools:
React - lib to build user interfaces with reusable components
Adonis - a nodejs backend framework.

# Project status

<h4 align="center"> 
	🚧  React Select 🚀 Awaiting improvements...  🚧
</h4>

# Features

[x] Create plateau
[x] Create rover

Important: A new rover will always use information of the latest created plateau. Please make sure to create a plateau before adding a new rover.

# Requirements and how to run the application
  Mariadb
  NodeJs


In this repository you’ll find the backend and frontend code. Before starting, run ‘npm i’ on both project folders. Then, on the backend folder, create the project database using the commands:
```
	mysql -u root -p
	CREATE DATABASE MarsRover;
	exit
```
Run the migrations with:
```
	node ace migration:run
```
To undo the migrations:
```
	node ace migration:rollback
```
Before starting the backend, create a .env file. A sample of the .env can be found in .env.example.

To run the backend project:
```
	npm run dev
```
To run the frontend project:
```
	npm start
```
Important: please, make sure that your database is up and the backend service is running before starting the frontend application.
