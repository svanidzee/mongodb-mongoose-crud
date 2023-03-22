import { model, Schema } from 'mongoose';

const imdbSchema = new Schema({
  rating: {
    type: Number,
    required: true,
  },
  votes: {
    type: Number,
    required: true,
  },
});

const Imdb = model('Imdb', imdbSchema);
export default Imdb;
