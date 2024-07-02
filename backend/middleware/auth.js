// const jwt = require('jsonwebtoken');
// const User = require('../models/user');
// const dotenv = require('dotenv');

// // Load environment variables from .env file
// dotenv.config();

// const verifyToken = async (req, res, next) => {
//   const authHeader = req.headers['authorization'];

//   if (!authHeader) {
//     return res.status(401).json({ error: 'Access denied. No token provided.' });
//   }

//   const token = authHeader.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ error: 'Access denied. Invalid token.' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = await User.findById(decoded.id).select('-password');
//     next();
//   } catch (error) {
//     res.status(401).json({ error: 'Invalid token.' });
//   }
// };

// module.exports = verifyToken;
