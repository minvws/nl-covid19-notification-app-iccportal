# Covid19 NotificationApp GGD Portal
Front-end portal for GGD workers to validate InfectionConfirmationId's from {app name} users.

## Introduction

This repository contains the frontend code for the Proof of Concept for the Dutch exposure notification app GGD portal, technically called `ICC Portal`. We provide this code in an early stage so that everyone can follow along as we develop the app, and to solicit feedback. Note that due to the early stage in which we are sharing this code, significant portions of the code might still change. We might add or remove features and code as needed, based on validation and user tests that are conducted partially in parallel to the development.

* The backend is located in the repository you are currently viewing.
* The iOS app can be found here: https://github.com/minvws/nl-covid19-notification-app-ios
* The android app can be found here: https://github.com/minvws/nl-covid19-notification-app-android
* The designs that are used as a basis to develop the apps can be found here: https://github.com/minvws/nl-covid19-notification-app-design
* The architecture that underpins the development can be found here: https://github.com/minvws/nl-covid19-notification-app-coordination

## Development & Contribution process

The core team works on the repository in a private fork (for reasons of compliance with existing processes) and will share its work as often as possible.

If you plan to make non-trivial changes, we recommend to open an issue beforehand where we can discuss your planned changes.
This increases the chance that we might be able to use your contribution (or it avoids doing work if there are reasons why we wouldn't be able to use it).


## Requirements
1. Node JS 12.18.1+  
1. NPM: https://nodejs.org/en/ or Yarn: https://yarnpkg.com/
1. Angular CLI: https://angular.io/guide/setup-local

## Installation

To install all required packages from `package.json`, run the following command:
```bash
npm install
```

## Development server

Run `npm run start` for a dev server. Navigate to [http://localhost:4200/](http://localhost:4200/). The app will automatically reload if you change any of the source files.
