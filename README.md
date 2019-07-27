# README

## Description
This app is designed to organize coffee products. It allows you to see, create, update, and delete coffee
products. It provides a search feature to search for coffee/coffees, and options to see all the coffees
in the database or to see just the ones that you have termed a favorite. The app also gives you the ability
to add or delete comments for each coffee product of you choose to do so.

## Installation

* Fork and clone repository
* Change into app directory
  $ cd coffee-organizer
* Run bundle and migrate files
  $ bundle install
  $ rake db:migrate
* Change into the client directory
  $ cd client
* Install client dependencies
  $ npm install
* Change out of client directory
  $ cd ..
* Start server
  $ rake start

## Usage

* There are four routes to explore, and are easily navigated by using the navigation bar
in the top left corner of the app.
  * Home
    * Home is the homepage of the app, and offers a search feature.
    * This search feature offers the user to search the database by coffee name.
    * The search will return a list of coffee products that include the search term submitted via a form.
  * Add Coffee
    * This page provides the user a form that the user can use to create a new coffee.
    * Upon submission the user will insert the coffee into the database.
  * Favorites
    * This page reveals to the user all the coffees that they have considered a favorite.
      * In order to favorite a product, the user simply find that coffee on presentation and clicks
        the 'add to favorites' button.
  * See All
    * This page essentially shows the user all the coffee products within the database.

## Contributing
Bug reports and pull requests are welcome on Github.

## License
This application is available as open source under the terms of the
  <a href="LICENSE">LICENSE</a>
