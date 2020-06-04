const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');
const User = require('./UserSchema');

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json())

//Register user
router.post('/register',(req,res) => {
    var hashedpassword = bcrypt.hashSync(req.body.password, 8);
    User.create({
        name: req.body.name,
        email:req.body.email,
        password:hashedpassword,
        role: req.body.role?req.body.role:'User'
    },(err,user) => {
        if(err) return res.status(500).send('There is problem in registration')
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With,Content-Type,Accept')
        res.status(200).send('Regsitration Succesful')
    })
})

//Login
router.post('/login',(req,res)=>{
    User.findOne({email:req.body.email},(err,user) => {
        if(!user) return res.status(404).send('No user found');
        else{
            const passIsValid = bcrypt.compareSync(req.body.password,user.password)
            if(!passIsValid) return res.status(401).send({auth:false, token:null})
            var token = jwt.sign({id:user._id}, config.secert,{expiresIn:86400})
            res.send({auth:true,token:token})
        }
    })
})


//UserInfo
router.get('/userinfo',(req,res) => {
    var token = req.headers['x-access-token'];
    if(!token) res.status(401).send({auth:false,token:'No Token Provided'})
    jwt.verify(token, config.secert, (err, decode) => {
        if(err) return res.status(500).send('Problem in the token');
        User.findById(decode.id,{password:0},(err,user) => {
            if(err) return res.status(500).send({auth:false,token:null});
            if(!user) return res.status(404).send({auth:false,token:'No User Found'}); 
            res.send(user);
        })
    })
})



router.get('/users',(req,res) => {
    User.find({},(err,user) => {
        if(err) throw err;
        res.send(user);
    })
})


module.exports = router;