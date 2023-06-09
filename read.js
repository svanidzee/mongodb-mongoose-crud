import mongoose from 'mongoose';
import Movie from './Model/Movie.js';
import * as dotenv from 'dotenv';
dotenv.config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@api1.cf46g0v.mongodb.net/?retryWrites=true&w=majority`,
);

// find document by id:
var movie1 = await Movie.findById('641b2b388fe147e7c7850aec');
console.log(movie1);

// projection
var movie2 = await Blog.findById(
  '641b2b388fe147e7c7850aec',
  'title, year',
).exec();
console.log(movie2);

// find one
var movie3 = await Movie.findOne({
  title: 'Armour of God 2: Operation Condor',
});
console.log(movie3);

// find all:
var movie4 = await Movie.find();
console.log(movie4);

// where method
var movie5 = await Movie.where('title')
  .equals('Armour of God 2: Operation Condor')
  .select('title author');
console.log(movie5);

// exists method
var movie6 = await Movie.exists({ title: 'Armour of God 2: Operation Condor' });
console.log(movie6);
