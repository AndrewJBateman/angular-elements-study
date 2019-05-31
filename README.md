# Angular Elements Study

An Angular 8 app that uses [@angular/elements](https://angular.io/guide/elements) for lazy loading of images.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* "_Angular elements are Angular components packaged as custom elements, a web standard for defining new HTML elements in a framework-agnostic way._"

* [@angular/elements](https://angular.io/guide/elements) do the following:

1. Optimize Lighthouse performance with Angular Elements
2. Maintain predictible component state
3. Expose public methods
4. Emit public events
5. Project content with slots

## Screenshots

![Example screenshot](./img/.png)

## Technologies

* [Angular /core v8.0.0](https://angular.io/) and [Angular CLI v8.0.1](https://cli.angular.io/).
* [@angular/elements v8.0.0](https://angular.io/guide/elements)
* [rxjs v6.5.2](https://rxjs-dev.firebaseapp.com/) ReactiveX library for composing asynchronous & event-based programs by using observable sequences.
* [firebase v6.1.0](https://firebase.google.com/)
* [ChangeDetectionStrategy.OnPush](https://angular.io/api/core/ChangeDetectionStrategy)
* [ViewEncapsulation](https://angular.io/api/core/ViewEncapsulation)
* [Node.js v12.3.1](https://nodejs.org/en/)

## Setup

* Run app using `ng serve` then navigate to `http://localhost:4200/`.

## Code Examples

## Features

* Updated to Angular 8.

* Lazy loading of images according to the users scroll position.

* Improved lighthouse score.

## Status & To-Do List

* Status: Updated to Angular 8 and no dependency vulnerabilities. ng serve and ng build processes start but I get error: `ERROR in Could not resolve module @angular/core`

* To-Do:

1. Fix @angular/core problem
2. Add firestore keys using .env file
3. I ran a Chrome dev audit and it only passed 1 out of 5 tests. There are a number of improvements that can be made to pass all 5 tests.

## Inspiration

* [Fireship tutorial by Jeff Delaney: Angular Elements Advanced Techniques](https://angularfirebase.com/lessons/angular-elements-advanced-techniques/)

* [Academind: Angular 8 - What's New? What changed?](https://www.youtube.com/watch?v=5_IC_ZJrVMg)

* [Angular Update Guide](https://update.angular.io/#7.2:8.0)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
