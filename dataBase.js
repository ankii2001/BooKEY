const books = [
    {
        ISBN : "123ONE",
        title : "BookTitle1",
        pubDate : "2021-07-08",
        language : "english",
        numPage : 300,
        authors : [1,2], // Id of the author...in array
        publication : 1,
        category :["cartoon","programming","education","thrill"],
    },
    {
        ISBN : "1234TWO",
        title : "BookTitle2",
        pubDate : "2020-07-08",
        language : "english",
        numPage : 300,
        authors : [1,2], // Id of the author...in array
        publication : 1,
        category :["cartoon","programming","education","thrill"],
    },
];


const author = [
    {
        id : 1,
        name : "Ankit",
        books : ["123ONE", "1234TWO"]
    },
    {
        id : 2,
        name : "Rahul",
        books : ["123ONE"]
    },
];


const publications = [
    {
        id : 1,
        name : "WriteX",
        books : ["123ONE"],

    },
    {
        id : 2,
        name : "WriteY1",
        books : [],

    },
];

module.exports = {books, author, publications};