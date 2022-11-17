var express = require('express'); 
const housing_controlers= require('../controllers/housing'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', housing_controlers.housing_view_all_Page ); 

/* GET detail costume page */ 
router.get('/detail', housing_controlers.housing_view_one_Page); 

/* GET create costume page */ 
router.get('/create', housing_controlers.housing_create_Page); 

/* GET create update page */ 
router.get('/update', housing_controlers.housing_update_Page); 

/* GET delete costume page */ 
router.get('/delete', housing_controlers.housing_delete_Page); 
 
module.exports = router; 