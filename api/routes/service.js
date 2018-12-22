const express = require('express')
const router = express.Router();
const myDatabase = require('../../connection');
const multer = require('multer');

//Storing in a different folder for services 
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './serviceUploads/')
    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
    }
})

const fileFilter = (req,file,cb) =>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
        cb(null, true)
    }else{
        cb(new Error('The file extension is not supported'), false)
    }
}

const uploads = multer({
   storage: storage,
   fileFilter: fileFilter,
   limits: {
       fileSize: 1024 * 1024 * 5
   }
})

//Getting all Service
router.get('/', (req,res,next)=>{
    myDatabase.select('*') .from('services') 
    .then(response =>{
        res.json({
            response
        })
    })
});

//Posting Services
router.post('/', uploads.array('image',2), (req,res,next)=>{
    const{estimate} = req.body
    myDatabase('services').insert({
        estimate:  estimate,
        portfolio1: req.files[0].path,
        portfolio2: req.files[1].path,
    })
    .then(response => {
        res.status(201).json({response })

    })
});

//Getting a Specific Service
router.get('/:serviceid', (req,res, next) => {
    const id = req.params.productId
    myDatabase('services').where({
        id: id,
       }).select('*')
       .then(response =>{
           res.json({response})
       })
       .catch(err => res.status(400).json)
 
})

//Deleting a Specific service
router.delete('/:serviceid', (req,res, next) => {
    const id = req.params.productId
    myDatabase('services')
    .where('id', id)
    .del()
    .then(response =>{
        res.json ('This service has been deleted')
    })
})

module.exports = router;