import jwt from 'jsonwebtoken';
import User from '../model/userModel.js';


export const SECRET = process.env.JWT_SECRET || 'RittickProloy';

export const authenticateJwt = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    try {
      const token = authHeader.split(' ')[1];
      
      const decoded = jwt.verify(token, SECRET);
      
      req.user = await User.findById(decoded.id).select('-password');
      
      req.token = token;
      
      next();
    } catch (error) {
      console.error('JWT verification error:', error.message);
      res.status(403).json({
        message: 'Forbidden: Invalid or expired token',
      });
    }
  } else {
    res.status(401).json({ 
      message: 'Unauthorized: No token provided' 
    });
  }
};