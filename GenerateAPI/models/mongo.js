var mongoose    =   require("mongoose");
//mongoose.connect('mongodb://ec2-54-191-90-209.us-west-2.compute.amazonaws.com:27017/Hexagon');

var Schema = mongoose.Schema;


var HexagonCenterSchema = new Schema({
    _id: Number,
    X: Number,
    Y: Number
});

// Mongoose Model definition



module.exports= mongoose.model('coordinates', HexagonCenterSchema, 'coordinates');
