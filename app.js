//Requiring modules
const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

//Requiring Route paths
const serviceRoutes = require('./api/routes/service')
const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders')
const dashboardRoutes = require('./api/routes/dashboard')
const blogPostRoutes = require('./api/routes/blogPost')
const likeRoutes = require('./api/routes/likes')
const notificationRoutes = require('./api/routes/notification')


app.use(morgan('dev'));
app.use('/productUploads', express.static('productUploads'));
app.use('/serviceUploads', express.static('serviceUploads'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

//Treating CORS- Cross Origin Resource Sharing
app.use((req,res,next) =>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authourization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST,  PATCH, DELETE, GET')
        return res.status(200).json({});
    }
    next();
})
 

//Routes that should handle requests
app.use('/service', serviceRoutes);
app.use('/product', productRoutes);
app.use('/orders', orderRoutes)
app.use('/user', dashboardRoutes)
app.use('/blogpost', blogPostRoutes)
app.use('/likes', likeRoutes)
app.use('/notification', notificationRoutes)

//Error Handling
app.use((req,res,next) =>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req,res,next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})
module.exports = app