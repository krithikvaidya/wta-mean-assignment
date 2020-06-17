
var restful = require('node-restful');
var mongoose = restful.mongoose;

var userSchema = new mongoose.Schema({
    manager_id: String,
    username: String,
    password: String

});


module.exports = restful.model('User',userSchema); 