import mongoose from 'mongoose';
import Movie from './Model/Movie.js';
import Imdb from './Model/Imdb.js';
import * as dotenv from 'dotenv';
dotenv.config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@api1.cf46g0v.mongodb.net/?retryWrites=true&w=majority`,
);

const imdb1 = await Imdb.create({
  rating: 7.2,
  votes: 12598,
});

const imdb2 = await Imdb.create({
  rating: 7.7,
  votes: 81796,
});

// create single movie
var movie = await Movie.create({
  genre: 'Action',
  title: 'Armour of God 2: Operation Condor',
  year: 1991,
  director: 'Jackie Chan',
  cast: ['Jackie Chan', 'Carol Do Do Cheng', 'Eva Cobo', 'Shèko Ikeda'],
  imdb: imdb1,
});
console.log(movie);

// create many
var movies = await Movie.create([
  {
    genre: 'Action',
    title: 'Armour of God 2: Operation Condor',
    year: 1991,
    director: 'Jackie Chan',
    cast: ['Jackie Chan', 'Carol Do Do Cheng', 'Eva Cobo', 'Shèko Ikeda'],
    imdb: imdb1,
  },
  {
    genre: 'Drama',
    title: 'Barton Fink',
    year: 1991,
    director: 'Ethan Coen & Joel Coen',
    cast: ['John Turturro', 'John Goodman', 'Judy Davis', 'Michael Lerner'],
    imdb: imdb2,
  },
]);
console.log(movies);
