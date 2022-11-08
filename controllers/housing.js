var Housing = require('../models/housing'); 
 
// List of all Houses 
exports.housing_lists = function(req, res) { 
    res.send('NOT IMPLEMENTED: Housing list'); 
}; 
 
// for a specific Housing. 
exports.housing_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Housing detail: ' + req.params.id); 
}; 
 
// Handle Housing create on POST. 
exports.housing_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Housing create POST'); 
}; 
 
// Handle Housing delete form on DELETE. 
exports.housing_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Housing delete DELETE ' + req.params.id); 
}; 
 
// Handle Housing update form on PUT. 
exports.housing_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Housing update PUT' + req.params.id); 
}; 