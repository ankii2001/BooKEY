const mongoose = require("mongoose");

// Creating a book schema
const BookSchema = mongoose.SchemaType({
        ISBN : String,
        title : String,
        pubDate : String,
        language : String,
        numPage : Number,
        authors : [Number],
        category :[String],
        publication : Number,
});


// Create a book model
const BookModel = mongoose.model(BookSchema);

module.exports = BookModel;
