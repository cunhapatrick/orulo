# Órulo Test Frontend
![CI/CD](https://github.com/cunhapatrick/orulo-test/workflows/CI/CD/badge.svg?branch=master)

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Quality assurance](#quality-assurance)
- [Setup](#setup)

## General info

The project is a mercado livre clone, that has just some features related with
the e-commerce:

- Has a price order filter that can be applied by the user;
- Can paginate throught the selected products;
- Has a login/signup system that is stored on the localStorage of the browser;
- The user can select favorites products and can see the list on another page of the project;

## Technologies

Project is created with:

- @ant-design/icons version 4.0.2
- Ant Design version 4.0.2
- Commitizen version 4.0.3
- Commitlint version 8.3.5
- Cross-env version 7.0.0
- Eslint version 5.16.0
- Husky version 4.2.1
- Lint-staged version 10.0.8
- Jest version 24.9.0
- Prettier version 1.19.1
- Puppeteer version 2.1.1
- React version: 16.13.0
- React-router-dom version 5.1.2
- Reactotron version 0.9
- Redux version: 7.2.0
- Redux-saga version 1.1.3
- Styled-components version 5.0.1
- Stylelint version 13.2.0

## Quality assurance

To assure the quality of the project, some measures have been taken:

- Clean code;
- Eslint & prettier monitoring, alert and fix the code pattern of javascript related files following the airbnb styleguide;
- Directory structure design to be easy to find specific components & features;
- EditorConfig configure to force a code pattern independent of the editor;
- End-to-End test coveraging the "happy path" of a user;
- Git-hooks and automated tools (husky, lint-staged, commitizen, commitlint to padronize commit messages and test procedures before pushing the code on the online repository to avoid sending bug code to it;
- Git-flow to padronize the git structure of branchs and release;
- Unit/Integration test coverage;
- Reactotron to debug the redux & redux-saga middleware more efficiently;
- Stylelint to monitore, alert and fix de code pattern of style related files;

## Setup

### Local Development

To run this project on development mode, install it locally using yarn:

```
$ cd ~/directory-where-the-project-was-cloned/orulo-test
$ yarn
$ yarn start
```

To run tests, execute the following command `$ yarn test`

To run the depuration with reactotron, install it locally following those [instructions](https://github.com/infinitered/reactotron/blob/master/docs/installing.md). After the installation of reactotron locally execute reactotron and start the application on development mode.

To run this project on production mode build it using yarn `$ yarn build` then deploy the builded bundle to the desired host.

### CI/CD

The project has a previous configuration that build, test and deploy to the firebase hosting environment, to setup a environment of your own:

- Create a project using one google account on [Firebase Console](https://console.firebase.google.com/u/0/) by following their tutorial steps;
- Run on terminal `$ firebase login:ci`, copy the firebase token, and on github go to your online repository of the project > Settings > Secrets, add a secret with the name `FIREBASE_TOKEN` and paste your token;
- On firebase console, create a web web inside your project and follow their instructions;
- on your terminal go to your project folder and run `$ firebase init`, chose the hosting option, when asked with public folder deploy, write build and pass the default value on the rest of the options;
  After that the environment is set and good to go;
