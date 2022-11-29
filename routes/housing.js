var express = require('express'); 
const housing_controlers= require('../controllers/housing'); 
var router = express.Router(); 

const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
 
/* GET costumes */ 
router.get('/', housing_controlers.housing_view_all_Page ); 

/* GET detail costume page */ 
router.get('/detail', housing_controlers.housing_view_one_Page); 

/* GET create costume page */ 
router.get('/create',secured, housing_controlers.housing_create_Page); 

/* GET create update page */ 
router.get('/update',secured, housing_controlers.housing_update_Page); 

/* GET delete costume page */ 
router.get('/delete',secured, housing_controlers.housing_delete_Page); 
 
module.exports = router; 