const product = require('../models/product');


const productretrieve = {
    getProductListing: (req, res) => {
    product.find({categoryId:req.body.categoryId}).toArray()
    .then((list)=>{
        res.json(list);
    })
    .catch(()=>{
        res.send("error finding products");
    })
    },
  
    getProductDetails: (req, res) => {
        product.find({productId:req.body.productId}).toArray()
        .then((details)=>{
            res.json(details);
        })
        .catch(()=>{
            res.send("no such product");
        })
    }
  };
  
  module.exports = productretrieve;
  