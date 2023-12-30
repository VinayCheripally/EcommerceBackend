const category = require("../models/category");

// category create, update, delete, get all, get one

const getCategoryListing = (req, res) => {
  category
    .find()
    .exec()
    .then((categories) => {
      res.json(categories);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal server error");
    });
};

module.exports = getCategoryListing;
