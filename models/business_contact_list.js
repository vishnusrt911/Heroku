let mongoose = require('mongoose');

// Create Business Contact List 
let bclSchema = mongoose.Schema({
    contactName: String,
    contactNumber: String,
    contactEmail: String
},
{
  collection: "business_contact_list"
});

module.exports  =mongoose.model('business_contact_list',bclSchema);