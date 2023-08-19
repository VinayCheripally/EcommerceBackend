const cart = require('../models/cart');
const user = require('../models/user');

const cartcontroller = {
    viewCart: (req, res) => {
        const user = user.findOne({username:req.body.username})
        .then(()=>{
          res.send("found user");
        })
        .catch(()=>{
          res.send("error");
        })
      cart.find({userId:user._id})
      .then((cart)=>{
        res.json(cart.items);
      })
      .catch(()=>{
        res.send("error loading cart")
      })
    },
  
    addToCart: (req, res) => {
      const user = user.findOne({username:req.body.username})
        .then(()=>{
          res.send("found user");
        })
        .catch(()=>{
          res.send("error");
        })

        const newItem = { productId, quantity };
        cart.find({userId:user._id})
        .then((cart)=>{
            cart.items.push(newItem);
            res.send("added to cart");
        })
        .catch(()=>{
          res.send("error adding into cart");
        })
    },
    updateCartItem:(req,res)=>{
      const user = user.findOne({username:req.body.username})
        .then(()=>{
          res.send("found user");
        })
        .catch(()=>{
          res.send("error");
        })

        cart.find({userId:user._id})
        .then((cart)=>{
            cart.items.quantity = req.body.updatedvalue;
            res.send("updated the quantity");
        })
        .catch(()=>{
          res.send("error updating the quantity");
        })

    },
    removeFromCart:(req,res)=>{
      const user = user.findOne({username:req.body.username})
        .then(()=>{
          res.send("found user");
        })
        .catch(()=>{
          res.send("error");
        })
        const product = {productId:req.body.productId,quantity:req.body.quantity};
        cart.find({userId:user._id})
        .then((cart)=>{
            cart.items.pop(product);
            res.send("updated the quantity");
        })
        .catch(()=>{
          res.send("error updating the quantity");
        })

    }
  };
  
  module.exports =cartcontroller;
  