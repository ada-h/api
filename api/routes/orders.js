const express = require('express')
const router = express.Router();

router.get('/', (req,res,next)=>{
    res.status(200).json({
       message: 'Getting for orders' 
    })
})

router.post('/', (req,res,next)=>{
    const orders = {
        name: req.body.name,
        password: req.body.password,
        
    }
    res.status(201).json({
       message: 'It was posted',
       orders
       
    })
})

router.get('/:orderId', (req,res,next)=>{
    const id = req.params.orderId
    res.status(200).json({
       message: 'It was posted',
       id: id
    })
})
router.patch('/:orderId', (req,res, next) => {
    res.status(200).json({
        message: "Definitely Patching Order/Updating"
    })
  
})

router.delete('/:orderId', (req,res, next) => {
     res.status(200).json({
         message: "We re deleting Orders!"
     })
})
module.exports = router;