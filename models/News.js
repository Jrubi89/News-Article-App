 var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var NewsSchema = new Schema({
    title:  String, required: true, // String is shorthand for {type: String}
    link: String, required: true,
    comment: [ Schema.Types.ObjectId, {ref: "Comment"}],
    
  });
var News = mongoose.model("News", NewsSchema);
module.exports = News;
  