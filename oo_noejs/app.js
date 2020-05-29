import express from 'express';
const port= 6700;
const app = express();
import database from './database';

app.get('/mydata',(req,res) =>{
    let output = database.getData('nodeat8');
    res.send(output)
});


app.post('/addUser',(req,res) =>{
    var data = {
        "_id": "4",
        "name": "Keith",
        "city": "Berlin",
        "phone": "676765758",
        "isActive": true
    }
    let output= database.postData('nodeat8',data);
    res.send(output)
})



app.listen(port,(err) => {
    if(err) throw err;
    console.log(`Server is runningon port ${port}`)
})