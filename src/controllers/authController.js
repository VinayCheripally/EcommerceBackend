const user = require("../models/user");

const authController = {
  register: (req, res) => {
    const myData = new user(req.body);
    myData
      .save()
      .then(() => {
        res.status(200).send("Signed up successfully!"); // 201 Created
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("Can't sign up."); // 500 Internal Server Error
      });
  },

  login: (req, res) => {
    user
      .findOne({ username: req.body.username, password: req.body.password })
      .then((foundUser) => {
        if (foundUser) {
          console.log(foundUser);
          res.status(200).send("Login successful!"); // 200 OK
        } else {
          res.status(400).send("Incorrect login details."); // 401 Unauthorized
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("Internal Server Error."); // 500 Internal Server Error
      });
  },
};

module.exports = authController;
