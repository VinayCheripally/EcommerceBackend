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
        cart.find({userId:req.body.username})
        .then((cart)=>{
            cart.items
        })
    }
  };
  
  module.exports =cartcontroller;
  