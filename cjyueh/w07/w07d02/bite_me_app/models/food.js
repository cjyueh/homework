var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var FoodSchema = new Schema({
  name: String,
  yumminess: String,
  ingredient: [{
    name: Schema.Types.ObjectId,
    ref: 'Ingredient'
  }]
});

var Food = mongoose.model('Food', FoodSchema);
module.exports = Food;