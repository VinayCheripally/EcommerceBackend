const category = require('../models/category');

const getCategoryListing = (req, res) => {
  category.find().toArray()
  .then(categories=>{
    res.json(categories);
  })
  .catch(()=>{
    res.send("error");
  })
};

module.exports = getCategoryListing;