# Angular Elements Study

An Angular 7 app that uses [@angular/elements](https://angular.io/guide/elements) for lazy loading of images.

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

* [Angular 7/core v7.3.8](https://angular.io/) and [Angular CLI v7.3.8](https://cli.angular.io/).
* [@angular/elements](https://angular.io/guide/elements)
* [rxjs v6.4.0](https://rxjs-dev.firebaseapp.com/) ReactiveX library for composing asynchronous & event-based programs by using observable sequences.
* [firebase v5.9.3](https://firebase.google.com/)
* [ChangeDetectionStrategy.OnPush](https://angular.io/api/core/ChangeDetectionStrategy)
* [ViewEncapsulation](https://angular.io/api/core/ViewEncapsulation)

## Setup

* Run app using `ng serve` then navigate to `http://localhost:4200/`.

## Code Examples

## Features

* Lazy loading of images according to the users scroll position.

* Improved lighthouse score.

## Status & To-Do List

* Status: basic working app that demonstrates lazy loading of images.

* To-Do:

1. Add firestore keys using .env file
2. I ran a Chrome dev audit and it only passed 1 out of 5 tests. There are a number of improvements that can be made to pass all 5 tests.

## Inspiration

[Fireship tutorial by Jeff Delaney: Angular Elements Advanced Techniques](https://angularfirebase.com/lessons/angular-elements-advanced-techniques/)

## Contact

Created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
