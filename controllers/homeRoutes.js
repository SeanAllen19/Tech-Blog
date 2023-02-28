const router = require('express').Router();


// router.get('/', async(req,res) => {
//     try{
    
//     }
//     catch(err){}
// } )

router.get('/', (req, res) => {
    res.render('login')
  });



  
  module.exports = router;
