 var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var CommentSchema = new Schema({
    title:  String, required: true, // String is shorthand for {type: String}
    link: String, required: true,
    comments: [{ Schema.Types.ObjectId, ref: "Comment" }],
    
  });
var Comment = mongoose.model("Comment", CommentSchema);
module.exports = Commnets;
  