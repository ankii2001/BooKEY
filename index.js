require("dotenv").config();

// Frame work
const express = require("express");

const mongoose = require("mongoose")
// Database
const database = require("./dataBase");

// Initialization
const booKEY = express();

// Configuration
booKEY.use(express.json());

// Establish a database connection
mongoose.connect( process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}
).then(() => console.log("Connection Established!😉"));

/*

Route           /
Description     Get all books
Access          PUBLIC
Parameter       None
Method          GET

*/


booKEY.get("/", (req, res) => {
    return res.json({ books : database.books})
});

/*

Route           /
Description     Get specific book based on ISBN
Access          PUBLIC
Parameter       isbn
Method          GET

*/

booKEY.get("/is/:isbn", (req, res) => {
    const getSpecificBook = database.books.filter((book) => book.ISBN === req.params.isbn);

    if (getSpecificBook.length === 0) {
        return res.json({ error : `No book found for the ISBN of ${req.params.isbn}`,});
    }

    return res.json({book : getSpecificBook});
});

/*

Route           /c
Description     Get specific books based on category
Access          PUBLIC
Parameter       category
Method          GET

*/

booKEY.get("/c/:catogory", (req, res) => {
    const getSpecificBook = database.books.filter((book) => book.category.includes(req.params.catogory)
    );
    if (getSpecificBook.length === 0) {
        return res.json({ error : `No book found for the catogory of ${req.params.catogory}`,});
    }

    return res.json({book : getSpecificBook});
});

/*

Route           /l
Description     Get specific books based on language
Access          PUBLIC
Parameter       language
Method          GET

*/

booKEY.get("/l/:language", (req, res) => {
    const getSpecificBook = database.books.filter((book) => book.language.includes(req.params.language)
    );
    if (getSpecificBook.length === 0) {
        return res.json({ error : `No book found for the language of ${req.params.language}`,});
    }

    return res.json({book : getSpecificBook});
});


/*

Route           /author
Description     Get all authors
Access          PUBLIC
Parameter       None
Method          GET

*/

booKEY.get("/author",(req, res) => {
    return res.json({ authors : database.author});

});

/*

Route           /a
Description     Get specific books based on author
Access          PUBLIC
Parameter       author
Method          GET

*/

booKEY.get("/a/:author", (req, res) => {
    const getSpecificBook = database.books.filter((book) => book.author.includes(req.params.author)
    );
    if (getSpecificBook.length === 0) {
        return res.json({ error : `No book found for the author of ${req.params.author}`,});
    }

    return res.json({book : getSpecificBook});
});

/*

Route           /author/book
Description     Get All authors based on books
Access          PUBLIC
Parameter       isbn
Method          GET

*/

booKEY.get("/author/book/:isbn", (req, res) => {
    const getSpecificAuthor = database.author.filter((author) => author.books.includes(req.params.isbn)
    );
    if (getSpecificAuthor.length === 0) {
        return res.json({ error : `No Author found for book of ${req.params.isbn}`,});
    }

    return res.json({book : getSpecificAuthor});
});


/*

Route           /publications
Description     Get All publications
Access          PUBLIC
Parameter       None
Method          GET

*/

booKEY.get("/publications", (req, res) => {
    return res.json({ publications : database.publications});

});

/*

Route           /book/new
Description     add new book
Access          PUBLIC
Parameter       None
Method          POST

*/

booKEY.post("/book/new", (req, res) =>{
    const{newBook} = req.body;
    database.books.push(newBook);
    return res.json({ books: database.books});

});

/*

Route           /author/add
Description     add new author
Access          PUBLIC
Parameter       None
Method          POST

*/

booKEY.post("/author/add", (req, res) => {
    const{newAuthor} = req.body;
    database.author.push(newAuthor);
    return res.json({ author: database.author});
});

/*

Route           /book/update/title
Description     update book title
Access          PUBLIC
Parameter       isbn
Method          PUT

*/

booKEY.put("/book/update/title/:isbn",(req, res) => {

// ForEach
database.books.forEach((book) =>{
    if(book.ISBN === req.params.isbn){
        book.title = req.body.newBookTitle
        return; }
    });

    return res.json({books : database.books});
});

/*

Route           /book/update/author
Description     update/add new author for book
Access          PUBLIC
Parameter       isbn
Method          PUT

*/

booKEY.put("/book/update/author/:isbn/:authorId",(req, res) => {

    // update book database
    database.books.forEach((book) => {
        if(book.ISBN === req.params.isbn){
            return book.author.push(parseInt(req.params.authorId))
        }
    });
    
    // update author database
    database.authors.forEach((author) => {
        if(author.id === parseInt(req.params.authorId)) 
            return author.books.push(req.params.isbn);
    });

    return res.json({books : database.books, author : database.author})

});

/*

Route           /publication/update/book
Description     update/add new book to a publication
Access          PUBLIC
Parameter       isbn
Method          PUT

*/

booKEY.put("/publication/update/book/:isbn", (req, res) => {
    // update the publication database
    database.publications.forEach((publication) =>{
        if(publication.id === req.body.pubId){
            return publication.books.push(req.params.isbn);
        }
    });
    // update the book database
    database.books.forEach((book) => {
        if(book.ISBN === req.params.isbn){
            book.publication = req.body.pubID;
            return;
        }
    });

return res.json({
    books : database.books,
    publications : database.publications,
    message : "Successfully updated publication",
 });
});



booKEY.listen(2001, () => console.log("running!! properly😎"));
