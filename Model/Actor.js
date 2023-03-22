import { model, Schema, SchemaTypes } from 'mongoose';

const imdbSchema = new Schema({});

const Imdb = model('Imdb', imdbSchema);
export default Imdb;
