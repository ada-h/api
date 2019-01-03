const express =require('express');
const router = express.Router();
const myDatabase = require('../../connection')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/register', (req,res,next)=>{
    const{id,username,email,password,location,services,} = req.body;
    myDatabase('register').where({
        email: email,
       }).select('id')
       .then(response =>{
           if (response.length >= 1){
                res.status(409). json({
                    message: 'User already exists'
                })
           } else{
            bcrypt.hash(password, 10, (err, hash)=>{    
                if(err){
                    res.status(500).json({
                        error:err
                    })
                }  
                myDatabase('register')  
                .insert({
                    "id": id,
                    "username": username,
                    "email": email,
                    "password":  hash,
                    "location": location,
                    "service": services
                })    
                .then (response=>{
                    res.status(200).json("You have been registered successfully")
                })
                .catch(err => res.status(400).json(err))
            });
           }
       })  
})

router.post('/login', (req,res,next) =>{   
    const{email, password} = req.body
    myDatabase('register').where({
        email: email,
       }).select('*')
       .then(user =>{
           if(user.length < 1){
               return res.status(401).json({
                   message: 'Auth failed'
               })
           }
           bcrypt.compare(password, user[0].password, (err, response) =>{
               if (response){
                  const token =  jwt.sign({
                    "id": user[0].id,
                    "location": user[0].location,
                    "service": user[0].service
                   },
                    "123456",
                    {
                        expiresIn: '5h'
                    },
                     )
                   return res.status(200).json({
                       message:'Yay!! You exist',
                        token: token
                    })
               } else{
                    res.status(400). json('Wrong Username or Password')
               }               
           })
       })
    .catch(err => res.status(400).json)
})

router.delete('/:userId', (req,res, next) =>{
    const id = req.params.userId
    myDatabase('register')
    .where('id', id)
    .del()
    .then(response =>{
        res.json('This user has been deleted')
    })
    .catch(err =>{
        res.status(400).json('Could not delete user')
    })
})


module.exports= router;