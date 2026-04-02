# Movie Watchlist

A web application built with **React**, **TypeScript**, and **Vite** where users can keep track of movies they want to watch and movies they have already seen.

## Project Description

This is a school project created to practice building a web application with React, TypeScript, and Vite. The purpose of the project is to create a movie watchlist application with a user interface inspired by IMDb. Users can add movies, mark them as watched or unwatched, filter the movie list, and view a details page for each movie.

## Features

- Add new movies to the watchlist
- View all added movies
- Mark movies as watched or unwatched
- Filter movies by:
  - All
  - Watched
  - Unwatched
- View a details page for each movie
- User interface inspired by IMDb

## Components

The project contains the following components and pages:

### Components

- **Navbar:** displays the title
- **MovieForm:** adds new movies
- **FilterBar:** lets the user filter movies
- **MovieList:** displays the list of movies
- **MovieCard:** displays one movie

### Pages

- **HomePage:** landing page with introduction
- **MoviePage:** main page where users manage their movies
- **MovieDetails:** shows details for a selected movie

## Stateful Components

- **MoviePage:** displays movies and handles filtering
- **MovieForm:** allows the user to add a new movie to the list

## Technologies Used

- **HTML/JSX**
- **CSS**
- **React**
- **TypeScript**
- **Vite**
- **React Router DOM**

## Routing

React Router is used to update the URL between pages.

- `/` Home page
- `/movies` Movie list page
- `/movie/:id` Movie details page

## How to Build and Run the Project

```bash
npm install
npm run dev
npm run build
```

## Demo

[Live demo](https://movie-watchlist-pied-mu.vercel.app/)

## Requirements

- [x] Project uses at least 6 components
- [x] At least 2 components are stateful
- [x] React Router is used to dynamically update the URL
- [x] Git and GitHub have been used
- [x] README file is included in the project
- [x] Build and run instructions are included
- [x] Demo link is included
