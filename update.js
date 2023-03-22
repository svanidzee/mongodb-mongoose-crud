import mongoose from 'mongoose';
import Movie from './Model/Movie.js';
import * as dotenv from 'dotenv';
dotenv.config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@api1.cf46g0v.mongodb.net/?retryWrites=true&w=majority`,
);

var movie = await Movie.findById('641b2b388fe147e7c7850aec');
console.log(movie);

movie.title = 'GoodFellas';
await movie.save();
console.log(movie);
