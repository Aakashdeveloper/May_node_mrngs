const express = require('express');
const app = express();
const port = process.env.PORT || 9700;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongourl = "mongodb://localhost:27017";
let db;
let col_name = "nodeat8";

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.get('/health',(req,res) =>{
    res.send("Health Check Pass")
})

app.get('/',(req,res) =>{
    res.send("Health Check Pass")
})

//Read
app.get('/users',(req,res) => {
    var query = {}
    if(req.query.id){
        query = {_id:req.query.id, isActive:true}
    }else if(req.query.city){
        query = {city:req.query.city, isActive:true}
    }else{
        query={isActive:true}
    }
    db.collection(col_name).find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//Insert
app.post('/addUser', (req,res) => {
    console.log(req.body)
    db.collection(col_name).insertOne(req.body,(err,result) => {
        if(err) throw err;
        res.send('Data Added')
    })
})

//Update
app.put('/updateUser',(req,res) =>{
    db.collection(col_name).updateOne(
        {_id: req.body._id},
        {
            $set:{
                name:req.body.name,
                city:req.body.city,
                phone:req.body.phone,
                isActive:true
            }
        },(err,result) => {
            if(err)
                throw err
            else{
                res.send('Data Updated')
            }
        }
    )
})


//Delete
app.delete('/deleteUser',(req,res) => {
    db.collection(col_name).remove({_id:req.body._id},(err,result)=>{
        if(err)
                throw err
            else{
                res.send('Data Deleted')
            }
    })
})

MongoClient.connect(mongourl, (err,client) => {
    if(err) console.log('Error while connecting');
    db = client.db('classpractice');
    app.listen(port,(err) => {
        console.log(`Server is running on port ${port}`)
    }) 
})
