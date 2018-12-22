const express = require ('express')
const router = express.Router()

router.get('/:notificationId', (req,res, next) =>{
    res.status(200).json({
        message: 'Getting Notification'
    })
})
router.post('/:notificationId', (req,res, next) =>{
    res.status(201).json({
        message: 'Posting Notification'
    })
})
router.delete('/:notificationId', (req,res, next) =>{
    res.status(200).json({
        message: 'Deleting Notification'
    })
})
module.exports = router;