const express = require('express');

const app = express();

// // middleware mylogger
// var myLogger = function(req,res,next){
//     console.log('Inside the myLogger')
//     console.log("Logged");
//     req.sahib = Date.now()
//     next()
// }

// var mw = require('./my-middleware.js')

// //default middleware
// app.use(function(req,res,next){
//     console.log('Inside the defualt logger')
//     console.log('Time: ', Date.now())
//     req.sahib = "Sahib"
//     next()
// })


// app.use(myLogger)


// // app.use(mw({ option1: '1', option2: '2' }))

// // basic route
// app.get('/', (req,res) =>   
//     res.send('Hello World')   
// )

// //middleware for the controller "/users/:userId"
// app.get('/users/:userId', function (req, res, next) {
//     console.log('Request URL:', req.originalUrl)
//     next()
//   }, function (req, res, next) {
//     console.log('Request Type:', req.method)
//     next()
// })

// app.get('/users/:userId' , function(req,res) {
//     var responseText = 'Hello World!<br>'
//   responseText += '<small>Requested at: ' + req.sahib + '</small>'
//     // res.send(req.param("userId"))
//     res.send(responseText)
// })


// // middleware for the controller "/user/:userId"
// app.get('/user/:userId' ,function(req,res,next){
//     if(req.params.userId === '0'){
//         console.log("userId is ",0)  
//         next('route')
//     }
//     else{
//         console.log("UserId is not ",0 )
//         res.send('res is not zero')
//     }
    
// })

// app.get('/user/:userId',function(req,res,next){
//     res.send("IN other route ",)
// })

/*
* Router-level Middleware
* 
*/


var router = express.Router()

router.use(function(req,res,next){
    console.log('Time:', Date.now())
    next()
})

router.use('/',function(req,res,next){
    console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})

app.use('/',router)


app.listen(3000,()=>console.log('Example app listening on 3000'))
