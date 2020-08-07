 var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var CommentSchema = new Schema({
    name:  String, // String is shorthand for {type: String}
    body: String, required: true,    
  });
var Comment = mongoose.model("Comment", CommentSchema);
module.exports = Commnets;
  