var db = require('./db');

module.exports.handleSignup = (email, password) => {
  //Check if the email already exists
  db.saveUser({
    email: email,
    password: password
  });
  //Save the user to the data base
  //Send the welcome message
};
