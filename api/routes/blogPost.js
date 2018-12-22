const express = require('express')
const router = express.Router();
const myDatabase = require('../../connection')

//Making a Post
router.post('/',(req,res,next)=>{
    const{author, post}=req.body
    myDatabase('blog')
    .insert({
        author: author,
        post: post,
        time: new Date(),
    })
    .then(response =>{
        res.json('Your Post was made successfully!')
    })
    .catch(err => res.status(400).json(err))
})

//Getting all posts
router.get('/',(req,res,next)=>{
    myDatabase.select('*') .from('blog') 
    .then(response =>{
        res.json({
            response
        })
    })
})

//Getting a particular post
router.get('/:blogpostId',(req,res,next)=>{
   const id = req.params.blogpostId;
   myDatabase('blog').where({
   id: id,
  }).select('post')
  .then(response =>{
      res.json({response})
  })
  .catch(err => res.status(400).json)
})

//Deleting a Particular Post --Only Admin can do this
router.delete('/:blogpostId',(req,res,next)=>{
    const id = req.params.blogpostId
    myDatabase('blog')
    .where('id', id)
    .del()
    .then(response =>{
        res.json('This post has been deleted')
    })
})


router.patch('/:blogpostId',(req,res,next)=>{
    res.status(200).json({
        message: 'Updating Post',
    })
})

module.exports = router;