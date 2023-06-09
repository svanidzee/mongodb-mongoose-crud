import { model, Schema, SchemaTypes } from 'mongoose';

const movieSchema = new Schema({
  genre: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    default: false,
  },
  director: {
    type: String,
    required: true,
  },
  cast: [String],
  imdb: {
    type: SchemaTypes.ObjectId,
    ref: 'Imdb',
    required: true,
  },
});

// middleware in mogoose
movieSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Movie = model('Movie', movieSchema);
export default Movie;
