var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  'username': {
    type: String,
    unique: true,
    required: true
  },
  'email': {
    type: String
  },
  'address': {
    address1: String,
    address2: String,
    city: String,
    state: String,
    zip: String
  }
});

module.exports = mongoose.model('user', UserSchema);
