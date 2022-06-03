const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protect = async (req, res, next) => {
  let token

  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]

      // Verfiy token
      const decoded = jwt.verfify(token, process.enc.JWT_SECRET)

      // Get user from the token
      req.user = await User.findById(decoded.id).select('-password')

      next()
    } catch (err) {
      console.log(err);
      res.status(401);
      res.json("Not Authorized");
    }
  }

  if(!token) {
    res.status(401)
    res.json("Not Authorized, no token");
  }
};

module.exports = { protect };
