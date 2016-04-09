var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
  console.log("database has been connected!");
});

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId

var RestaurantSchema = new Schema({
  name: String,
  address: Object,
  yelpUrl: String,
  items: [{type: Schema.ObjectId, ref: "Items"}]
});

var ItemSchema = new Schema({
  name: String,
  restaurant: [{type: Schema.ObjectId, ref: "Restaurant"}]
});

var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);
var ItemModel = mongoose.model("Item", ItemSchema);

module.exports ={
  RestaurantModel: RestaurantModel,
  ItemModel: ItemModel
};
