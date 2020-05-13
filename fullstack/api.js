var express = require('express');
var app = express();
var port = process.env.PORT || 8900;
var restaurantRouter = require('./src/routes/restaurantRouter')
var cityRouter = require('./src/routes/cityRouter');

//Static files
app.use(express.static(__dirname+'/public'));
//html
app.set('views', './src/views');
//View engine
app.set('view engine','ejs');

app.get('/',function(req,res){
	//res.send("Home")
	res.render('index')
});

app.use('/restaurants',restaurantRouter);
app.use('/city',cityRouter)


app.listen(port,function(err){
    if(err) throw err;
    console.log('App is running on port '+port)
})