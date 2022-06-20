# Challenge 10 Profile Generator

## Table of Contents

- [User Story](#user-story)
- [Description](#description)
- [Usage](#usage)
- [Requirements](#requirements)
- [Application](#application)
- [Questions](#questions)

## User Story

- AS A manager
- I WANT to generate a webpage that displays my team's basic info
- SO THAT I have quick access to their emails and GitHub profiles

## Description

This application is a Command Line application that dynamically generates an HTML file from user's input using node.js and the Inquire package. In addition, this application uses Object Oriented Programming, and Test Driven Development. Tests can be run with Jest by calling 'npm run test'. An example team.html file that was created using this application is located in the dist directory.

## Usage

- Clone the repository into your directory
- Open the command line in this directory
- Install 'npm install'
- Run tests by the command 'npm run test'
- Invoke the command 'node index.js'
- Answer the prompted questions
- team.html is created in the dist directory and style.css is copied to the dist directory
- Tests are located in the '**tests**' directory
- Objects are located in the 'lib' directory

## Requirements

- GIVEN a command-line application that accepts user input
- WHEN I am prompted for my team members and their information
- THEN an HTML file is generated that displays a nicely formatted team roster based on user input
- WHEN I click on an email address in the HTML
- THEN my default email program opens and populates the TO field of the email with the address
- WHEN I click on the GitHub username
- THEN that GitHub profile opens in a new tab
- WHEN I start the application
- THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
- WHEN I enter the team manager’s name, employee ID, email address, and office number
- THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
- WHEN I select the engineer option
- THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
- WHEN I select the intern option
- THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
- WHEN I decide to finish building my team
- THEN I exit the application, and the HTML is generated

## Application

[Link to video walkthrough](https://drive.google.com/file/d/1DnMAO2yTQlU9oTaVKtY5V3Q6muGxWS3E/view?usp=sharing)

## Questions?

For any questions, please email gilinamcbride@gmail.com, or visit any other projects on [Github](github.com/gilinamcbride).
