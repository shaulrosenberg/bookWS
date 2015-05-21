/*
* get all best sellers
*/
var books = [
  {
    "id" : "978",
    "cat" : ["book","hardcover"],
    "name" : "The Lightning Thief",
    "author" : "Rick Riordan",
    "series_t" : "Percy Jackson and the Olympians",
    "sequence_i" : 1,
    "genre_s" : "fantasy",
    "inStock" : true,
    "price" : 12.50,
    "pages_i" : 384
  }
,
  {
    "id" : "979",
    "cat" : ["book","paperback"],
    "name" : "The Sea of Monsters",
    "author" : "Rick Riordan",
    "series_t" : "Percy Jackson and the Olympians",
    "sequence_i" : 2,
    "genre_s" : "action",
    "inStock" : true,
    "price" : 6.49,
    "pages_i" : 304
  }
,
  {
    "id" : "980",
    "cat" : ["book","paperback"],
    "name" : "Sophie's World : The Greek Philosophers",
    "author" : "Jostein Gaarder",
    "sequence_i" : 1,
    "genre_s" : "love",
    "inStock" : true,
    "price" : 3.07,
    "pages_i" : 64
  }
,
  {
    "id" : "981",
    "cat" : ["book","paperback"],
    "name" : "Lucene in Action, Second Edition",
    "author" : "Michael McCandless",
    "sequence_i" : 1,
    "genre_s" : "education",
    "inStock" : true,
    "price" : 30.50,
    "pages_i" : 475
  }
]


exports.getAllBooks = function(){
	console.log("Books in inventory", books);
	return books;
}

/*
* get book name by ID
*/
exports.getBookName = function (bookId){
	var dbLen =  books.length;
	for(var i = 0; i < dbLen; i++){
		if(books[i].id == bookId){
				return books[i];
		}
	}
	//In case the book with this id was not found, throw a message
	console.log("Book with id " + bookId + " was not found");
};

/*
* This function returns the best selling month or months of a book
*/
exports.getBooksByGenre = function(genre){
	var dbLen = books.length;
	var i;
	for(i =0; i< dbLen; i++){
		if(books[i].genre_s == genre) { return books[i]; }
	}
	//In case the book with this id was not found, throw a message
	console.log("Book with Genre " + genre + " was not found");
	return null;
	
};
