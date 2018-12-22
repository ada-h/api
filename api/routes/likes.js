const express =require ('express')
const router = express.Router()

router.get('/', (req,res,next) =>{
    res.status(200).json({
        message: 'I am getting likes'
    })
})

router.post('/', (req,res,next) =>{
    res.status(200).json({
        message: 'I am posting likes'
    })
})

module.exports = router;