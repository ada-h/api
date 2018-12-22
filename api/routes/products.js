const express = require('express')
const router = express.Router()
const multer = require('multer')
const myDatabase = require('../../connection')
const checkAuth = require ('../middleware/check-auth')

//specifying the folder to store my files and extension
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './productUploads/')
    },
    filename: function(req,file,cb){
        cb(null, file.originalname);
    }
})

//Filtering the image i am getting
const fileFilter = (req, file, cb) =>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || 
        file.mimetype === 'image/jpg'){
        cb(null, true)
    }
    else {
        cb(new Error('File type is not supported'), false)
    }
}

//Specifying a file size
const upload = multer({
    storage: storage, 
    limits: {
    fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

//Getting All Products
router.get('/', (req,res,next) =>{
    myDatabase.select('*') .from('products') 
    .then(response =>{
        res.json({
            response
        })
    })
})

//Posting a product
router.post('/', checkAuth, upload.single('productImage'), (req,res,next) =>{
    const{price, color, size} = req.body
    myDatabase('products').insert({
        price: price,
        color: color,
        size: size,
        productImage: req.file.path,
    })
    .then(response => {
        res.status(201).json({response })

    })
})

//Getting a Specific Product
router.get('/:productId', (req,res,next) =>{
    const id = req.params.productId
    myDatabase('products').where({
        id: id,
       }).select('*')
       .then(response =>{
           res.json({response})
       })
       .catch(err => res.status(400).json)
})

//For Deleting a Specific Product
router.delete('/:productId', checkAuth, (req,res,next) =>{
    const id = req.params.productId
    myDatabase('products')
    .where('id', id)
    .del()
    .then(response =>{
        res.json ('Product has been deleted')
    })
})

module.exports = router