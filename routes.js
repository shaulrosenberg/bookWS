var express = require('express');
var booksModule = require('./ws_functions');

var app = express();
app.listen(process.env.PORT || 3000);



app.get('/' , function(req, res){
	// set response status to 200 and return data as a json format
	res.status(200).send("<h1>Books inventory ws</h1>");
});

app.get('/getAllBooks' , function(req, res){
	//comment
	res.status(200).json(booksModule.getAllBooks());
});

app.param('bookId' , function(req, res, next, value){
	req.book = booksModule.getBookName(value);
	next();
});

app.get('/getBook/:bookId', function(req, res){
	// set response status to 200 and return data as a json format
	if(req.book){
		res.status(200).json(req.book);
	}
	else
	{
		res.status(200).json({error : "invalid id"});
	}


});

app.param('bookId2' , function(req, res, next, genre){
	req.genre = booksModule.getBooksByGenre(genre);
	next();
});

app.get('/Genres/:bookId2', function(req, res){ //example: fantasy, education, love ,action.
	if(req.genre){
		res.status(200).json(req.genre); 
	}
	else
	{
		res.status(200).json({error : "invalid id"}); 
	}

});
//else display error
app.get('*' , function(req, res){
	res.status(404).send("Page was not found. try");
});