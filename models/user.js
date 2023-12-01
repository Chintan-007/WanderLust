const mongoose = require("mongoose");
const schema = mongoose.Schema;
const passportMongoose = require("passport-local-mongoose");

const userSchema = new schema({
    email:{
        type:String,
        required:true
    }
});

userSchema.plugin(passportMongoose);//username,password fields will be added by passport-local-mongoose

module.exports = mongoose.model("User",userSchema);