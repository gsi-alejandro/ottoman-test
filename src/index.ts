import {connect, model, Schema} from 'ottoman';

connect('couchbase://localhost/travel-sample@Administrator:password');

const schema = new Schema({
  title: String,
  rating: String,
  releaseYear: Number,
  hasCreditCookie: Boolean
});
const Model = model('Model', schema);

const begin = async () => {
  const doc = new Model({title: 'Thor', rating: 'PG-13', releaseYear: '2011-45', hasCreditCookie: true });
  try {
    await doc.save();
  } catch (e) {
    console.log(e)
  }

}

begin();
