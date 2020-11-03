#!/usr/bin/env node
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'skill',
      type: 'checkbox',
      message: `what's your skill?`,
      choices: ['Javascript frone', 'Golang backend', 'Flutter mobile', 'Database Engineer'],
    },
  ])
  .then((answer) => {
    console.log('skill : ' + answer.skill);
  });
