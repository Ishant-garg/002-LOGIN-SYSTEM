const router = require('express').Router();

router.get('/post' , (req ,res)=>{
    res.send({
    
            name : 'ishant',
            id : 455,
            email : 'ishantgarg@gmail.com'
  
    }) 
})


module.exports = router