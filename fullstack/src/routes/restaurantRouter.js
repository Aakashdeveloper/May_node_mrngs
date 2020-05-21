var express = require('express');
var restaurantRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

function router(menu){
	restaurantRouter.route('/')
	.get(function(req,res){
	 mongodb.connect(url, function(err,dc){
		 if(err){
			 res.status(501).send('Error while connecting')
		 }else{
			 const dbo = dc.db('edureka');
			 dbo.collection('zomato').find({}).toArray((err,data) => {
				 if(err){
					 res.status(501).send('Error while fetching')
				 }else{
					res.render('restaurant',{title:'Restaurant Page',restaurants:data,
					menu:menu});
				 }
			 })
		 }
	 })
	 
  });
  
  restaurantRouter.route('/details/:id')
	.get(function(req,res){
		//var id = req.params.id
		var {id} = req.params
	    mongodb.connect(url, function(err,dc){
			if(err){
				res.status(501).send('Error while connecting')
			}else{
				const dbo = dc.db('edureka');
				dbo.collection('zomato').findOne({id:id},(err,data) => {
					if(err){
						res.status(501).send('Error while fetching')
					}else{
				     	//res.send(data)
					   res.render('details',{title:'Restaurant Page',restaurants:data,menu:menu});
					}
				})
			}
		})
  });

  return restaurantRouter
}


module.exports = router;