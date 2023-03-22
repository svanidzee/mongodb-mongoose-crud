import mongoose from 'mongoose';
import Movie from './Model/Movie.js';
import * as dotenv from 'dotenv';
dotenv.config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@api1.cf46g0v.mongodb.net/?retryWrites=true&w=majority`,
);

// delete one
const deleteMovie = await Movie.deleteOne({
  title: 'Armour of God 2: Operation Condor',
});

// delete many
var deleteMovies = await Blog.deleteMany({
  title: 'Armour of God 2: Operation Condor',
});
