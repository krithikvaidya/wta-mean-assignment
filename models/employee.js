// node-restful to associate REST API with our model
var restful = require('node-restful');

// initialize RESTful Mongoose client
var mongoose = restful.mongoose;

// Employee Schema
var emp_schema = new mongoose.Schema({
    eval_type: String,
    emp_id: String,
    emp_name: String,
    remarks: String,
    department: String,
    manager_id: String,
    manager_name: String,
    rating_1: Number,
    rating_2: Number,
    rating_3: Number,
    rating_4: Number,
    rating_5: Number,
    rating_6: Number,
});

// Return model
module.exports = restful.model('Employee', emp_schema);