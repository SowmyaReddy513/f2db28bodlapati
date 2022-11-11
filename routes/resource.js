var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var housing_controller = require('../controllers/housing'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/houses', housing_controller.housing_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/houses/:id', housing_controller.housing_delete); 
 
// PUT request to update Costume. 
router.put('/houses/:id', housing_controller.housing_update_put); 
 
// GET request for one Costume. 
router.get('/houses/:id', housing_controller.housing_detail); 
 
// GET request for list of all Costume items. 
router.get('/houses', housing_controller.housing_lists); 
 
module.exports = router; 