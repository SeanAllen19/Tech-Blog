const router = require('express').Router();



router.get('/', (req, res) => {
    res.render('login')
  });


  router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/')
    } else {
        res.render('login')
    }
})
  
  module.exports = router;
