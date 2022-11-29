const mongoose = require("mongoose") 
const housingSchema = mongoose.Schema({ 
 house_zone: {
    type: String,
    minLength: 4,
    maxLength: 14
 }, 
 house_plan: {
    type: String,
    minLength: 5,
    maxLength: 20

 }, 
 house_cost: Number 
}) 
 
module.exports = mongoose.model("Housing", 
housingSchema) 