const mongoose = require("mongoose") 
const housingSchema = mongoose.Schema({ 
 house_zone: String, 
 house_plan: String, 
 house_cost: Number 
}) 
 
module.exports = mongoose.model("Housing", 
housingSchema) 