const expres = require('express');
const app = express();
const cors = require(cors());
const port = 3100;

const pool = require('pg').pool;
const pool = new pool({
    host:'',
    port:5432,
    user:'',
    password:'',
    database:'',

})

app.get('/user',(req,res) => {
    pool.query('SELECT * FROM STUDENTS',(err,result) => {
        if(err){
            throw err
        }else{
            res.status(200).send(result)
        }
    })
})


app.post('/addUser',(req,res) => {
    const {city,name,phone} = req.body;
    pool.query('INSERT INTO STUDENTS(city,name,phone) VALUES($1,$2,$3)',[city,name,phone],(err,result) => {
        if(err){
            throw err
        }else{
            res.status(200).send('data added')
        }
    })
})

app.listen(port,() => {
    console.log(`App is running on port ${port}`)
})