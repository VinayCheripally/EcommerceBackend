const user = require('../models/user');

const authController = {
    register: (req, res) => {
      // Implement registration logic here
      // Access request data using req.body
      const myData = new user(req.body);
      myData.save()
      .then(() => {
        res.send('signed up successfully!');
      })
      .catch(() => {
        res.send('cant signup.');
      });
    },
  
    login: (req, res) => {
      user.findOne({username:req.body.username,password:req.body.password})
      .then(()=>{
        res.send("login successful");
      })
      .catch(()=>{
        res.send("incorrect login details");
      })

    }
  };
  
  module.exports = authController;
  