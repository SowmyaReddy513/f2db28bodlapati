var Housing = require('../models/housing'); 


 
// List of all Houses 
exports.housing_lists = function(req, res) { 
    res.send('NOT IMPLEMENTED: Housing list'); 
}; 
 
// for a specific Housing. 
exports.housing_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Housing detail: ' + req.params.id); 
}; 
 
// Handle House create on POST. 
exports.housing_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Housing(); 
    
    document.house_zone = req.body.house_zone; 
    document.house_plan = req.body.house_plan; 
    document.house_cost = req.body.house_cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  
 
// Handle Housing delete form on DELETE. 
exports.housing_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Housing delete DELETE ' + req.params.id); 
}; 
 
// Handle Housing update form on PUT. 
exports.housing_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Housing update PUT' + req.params.id); 
}; 

// List of all Houses 
exports.housing_lists = async function(req, res) { 
    try{ 
        theHouses = await Housing.find(); 
        res.send(theHouses); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// VIEWS 
// Handle a show all view 
exports.housing_view_all_Page = async function(req, res) { 
    try{ 
        theHouses = await Housing.find(); 
        res.render('housing', { title: 'Housing Search Results', results: theHouses }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific Housing. 
exports.housing_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Housing.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle Housing update form on PUT. 
exports.housing_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Housing.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.house_zone)  
               toUpdate.house_zone = req.body.house_zone; 
        if(req.body.house_plan) toUpdate.house_plan = req.body.house_plan; 
        if(req.body.house_cost) toUpdate.house_cost = req.body.house_cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 