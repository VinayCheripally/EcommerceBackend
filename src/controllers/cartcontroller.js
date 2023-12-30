const cart = require("../models/cart");
const product = require("../models/product");
const user = require("../models/user");
// create cart
// get items of a cart
// remove items in a cart
// inc/dec quantity of a product in cart (optional)
// delete cart

const cartcontroller = {
  createCart: (req, res) => {
    user
      .findOne({ username: req.body.username })
      .then((data) => {
        const newCart = new cart({ userId: data.userId, cartId: data.userId });
        newCart
          .save()
          .then(() => {
            res.status(201).send("cart created successfully");
          })
          .catch((err) => {
            res.status(500).send("can't create cart");
          });
      })
      .catch(() => {
        res.status(500).send("could not find user");
      });
  },
  viewCart: (req, res) => {
    user
      .findOne({ username: req.body.username })
      .then((data) => {
        cart.findOne({ cartId: data.userId }).then((dat) => {
          if (!dat) {
            res.status(401).send("No cart for the specified user");
          }
          res.status(200).send(dat.items);
        });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  addToCart: (req, res) => {
    user
      .findOne({ username: req.body.username })
      .then((data) => {
        cart.findOne({ cartId: data.userId }).then((dat) => {
          if (!dat) {
            res.status(401).send("No cart for the specified user");
          }
          productId = req.body.productId;
          quantity = req.body.quantity;

          let productfound = false;
          for (var i = 0; i < dat.items.length; i++) {
            if (dat.items[i].productId == productId) {
              dat.items[i].quantity += quantity;
              productfound = true;
              break;
            }
          }
          if (!productfound) {
            dat.items.push({ productId, quantity });
          }
          dat
            .save()
            .then(() => {
              res.status(200).send("Successfully added");
            })
            .catch((saveError) => {
              res.status(500).send(saveError);
            });
        });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  updateCartItem: (req, res) => {
    user
      .findOne({ username: req.body.username })
      .then((data) => {
        cart.findOne({ cartId: data.userId }).then((dat) => {
          if (!dat) {
            res.status(401).send("No cart for the specified user");
          }
          productId = req.body.productId;
          quantity = req.body.quantity;

          let productfound = false;
          for (var i = 0; i < dat.items.length; i++) {
            if (dat.items[i].productId == productId) {
              dat.items[i].quantity += quantity;
              productfound = true;

              break;
            }
          }
          dat
            .save()
            .then(() => {
              res.status(200).send("Successfully updated");
            })
            .catch((saveError) => {
              res.status(500).send(saveError);
            });
        });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  removeFromCart: (req, res) => {
    user
      .findOne({ username: req.body.username })
      .then((data) => {
        cart.findOne({ cartId: data.userId }).then((dat) => {
          productId = req.body.productId;
          quantity = req.body.quantity;
          for (var i = 0; i < dat.items.length; i++) {
            if (dat.items[i].productId == productId) {
              if (dat.items[i].quantity == quantity) {
                dat.items.splice(i, 1);
              } else {
                dat.items[i].quantity -= quantity;
              }
              break;
            }
          }
          dat
            .save()
            .then(() => {
              res.status(200).send("Successfully removed");
            })
            .catch((saveError) => {
              res.status(500).send(saveError);
            });
        });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
};

module.exports = cartcontroller;
