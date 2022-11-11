var express = require('express'); 
const housing_controlers= require('../controllers/housing'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', housing_controlers.housing_view_all_Page ); 
module.exports = router; 