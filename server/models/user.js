const bcryptjs = require('bcryptjs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  username: {
    type: String,
    min: [4, 'Too short, min is 4 characters'],
    max: [32, 'Too long, max is 32 characters']
  },
  email: {
    type: String,
    min: [4, 'Too short, min is 4 characters'],
    max: [32, 'Too long, max is 32 characters'],
    unique: true,
    lowercase: true,
    required: 'Email is required',
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
  },
  password: {
    type: String,
    min: [4, 'Too short, min is 4 characters'],
    max: [32, 'Too long, max is 32 characters'],
    required: 'Password is required'
  },
  rentals: [{ref: 'Rental', type: Schema.Types.ObjectId}]
});

userSchema.methods.hasSamePassword = function(requestedPassword) {
   return bcryptjs.compareSync(requestedPassword, this.password)
}

userSchema.pre('save', function (next) {
  const user = this;
  bcryptjs.genSalt(10, function (err, salt) {
    bcryptjs.hash(user.password, salt, function (err, hash) {
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model('User', userSchema);






























