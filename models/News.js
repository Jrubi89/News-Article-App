 var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var NewsShema = new Schema({
    title:  String, required: true, // String is shorthand for {type: String}
    link: String, required: true,
    comments: [{ Schema.Types.ObjectId, ref: "Comment" }],
    
  });
var News = mongoose.model("News", NewsShema);
module.exports = News;
  