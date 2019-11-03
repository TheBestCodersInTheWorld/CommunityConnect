var mongoose = require('mongoose');

var foodSubmissionSchema = mongoose.Schema({
    name: {type:String, default:"default name"},
    email: {type:String, default:"default@email.com"},
    foodType: {type:String, default:"default food"},
}, {
    timestamps: true
});

module.exports = {
    foodSubmissionSchema: foodSubmissionSchema,
}