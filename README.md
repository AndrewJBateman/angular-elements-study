# :zap: Angular Elements Study

* An Angular 8 app that uses [@angular/elements](https://angular.io/guide/elements) for lazy loading of images.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## :page_facing_up: Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## :books: General info

* "_Angular elements are Angular components packaged as custom elements, a web standard for defining new HTML elements in a framework-agnostic way._"
* [@angular/elements](https://angular.io/guide/elements) do the following:

1. Optimize Lighthouse performance with Angular Elements
2. Maintain predictible component state
3. Expose public methods
4. Emit public events
5. Project content with slots

* Custom Elements are not supported by all browsers. They are supported by Chrome, Firefox, Opera, and Safari. They are available in other browsers by using polyfills.

## :camera: Screenshots

![Example screenshot](./img/.png)

## :signal_strength: Technologies

* [Angular /core v8](https://angular.io/) and [Angular CLI v8.0.1](https://cli.angular.io/).
* [@angular/elements v8](https://angular.io/guide/elements)
* [rxjs v6](https://rxjs-dev.firebaseapp.com/) ReactiveX library for composing asynchronous & event-based programs by using observable sequences.
* [firebase v6](https://firebase.google.com/)
* [ChangeDetectionStrategy.OnPush](https://angular.io/api/core/ChangeDetectionStrategy)
* [ViewEncapsulation](https://angular.io/api/core/ViewEncapsulation)
* [Node.js v12](https://nodejs.org/en/)

## :floppy_disk: Setup

* Run app using `ng serve` then navigate to `http://localhost:4200/`.

## :computer: Code Examples

## :cool: Features

* Updated to Angular 8.
* Lazy loading of images according to the users scroll position.
* Improved lighthouse score.

## :clipboard: Status & To-Do List

* Status: Updated to Angular 8 and no dependency vulnerabilities. ng serve and ng build processes start but I get error: `ERROR in Could not resolve module @angular/core`
* To-Do:

1. Fix @angular/core problem & do npm install.
2. Add firestore keys using .env file
3. I ran a Chrome dev audit and it only passed 1 out of 5 tests. There are a number of improvements that can be made to pass all 5 tests.

## :clap: Inspiration

* [Fireship tutorial by Jeff Delaney: Angular Elements Advanced Techniques](https://angularfirebase.com/lessons/angular-elements-advanced-techniques/)
* [Academind: Angular 8 - What's New? What changed?](https://www.youtube.com/watch?v=5_IC_ZJrVMg)
* [Angular Update Guide](https://update.angular.io/#7.2:8.0)
* [Medium Tutorial by Alain Chautard: How to create Custom Angular Elements?](https://blog.angulartraining.com/tutorial-how-to-create-custom-angular-elements-55aea29d80c5)
* [fcc article by by Prateek Mishra: How to create Angular 6 Custom Elements and Web Components](https://www.freecodecamp.org/news/how-to-create-angular-6-custom-elements-web-components-c88814dc6e0a/)

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
