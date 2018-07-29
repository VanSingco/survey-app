const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const UserSchema= new Schema({
    username: {type: String, trim: true, unique: true, lowercase: true, required: true},
    fullname: {type: String, trim: true, default: ''},
    email:  {type: String, trim: true, unique: true, lowercase: true, required: true},
    password: {type:String},
    photo: {type:String, default: '/uploads/default.jpg'},
    facebook: {type:String, default: ''},
    fbTokens: Array,
    google:{type:String, default: ''},
    credits: {type: Number, default: 0}
});

UserSchema.pre('save', function(next){
    const user = this;
    if (user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            })
        });
    } else {
        next();
    }
});

UserSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

UserSchema.plugin(deepPopulate);

module.exports = mongoose.model('User', UserSchema);