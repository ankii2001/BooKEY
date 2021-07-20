// Requirements for our Project


// Books
    // ISBN(International Standard Book Number), Title, Publish Date, Language, num_pages, Author[], Category[] .

// Authors
    // Id, Name, Books[]

// Publications
    // Id, Name, Books[]

/* What are all the APIs that we need........
    
    Books

    --> We need an API 
        
        --> GET
        -> to get all books ✔Done
        -> to get specific books ✔Done
        -> to get list of books based on categories ✔Done
        -> to get list of books based on languages ✔Done

        --> POST
        -> Add new book

        --> PUT
        -> Update book title
        -> Update/Add new author

        --> DELETE
        -> delete a book
        -> delete an author
    
    
    Authors

    --> We need an API

        --> GET
        -> to get all authors
        -> to get specific authors
        -> to get list of authors based on books

        --> POST
        -> add new author

        --> PUT
        -> Update Author name

        --> DELETE
        -> delete an author


    Publications

    --> We need an API

        --> GET
        -> to get all publications
        -> to get specific publications
        -> to get list of publications based on book

        --> POST
        -> Add new publications

        --> PUT
        -> Update the publications name
        -> update/add books to publications

        --> DELETE
        -> delete a publication
        -> delete a book from publication

    How the server serves the request

*/