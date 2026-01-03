const bcrypt = require("bcrypt");
const User = require("../model/userModel")
const jwt = require('jsonwebtoken');
const { SECRET } = require('../middleware/authMiddleware');

const createToken = (id)=>{
    return jwt.sign({
        id
    },SECRET
    )
};

const signup = async(req,res)=>{
    try{
    const { firstName , lastName , email , password , confirmPassword , age , gender , phone} = req.body;

    if(!firstName || !lastName || !email || !password || !confirmPassword || !age || !gender || !phone){
        return res.status(400).json({message: 'Please fill all fields'})
    }

    if(password!=confirmPassword){
        return res.status(400).json({message: 'Passwords do not match'} )
    }
    const existingUser = await User.findOne({ email });

    if(existingUser){
        return res.status(400).json({ message: 'User already exists' } )
    }

    //hash the password
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = await User.creare({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phone,
      gender,
      age,
    });
    
    await newUser.save();

    res.status(201).json({
      message: 'Signup successful',
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
      }
      
    });


    }catch(error){
        res.status(500).json({ message: 'Server error', error: error.message })
    }
}

const signin = async (req, res) => {
  try {
    // Get email and password from request
    const { email, password } = req.body;

   
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    
    const user = await User.findOne({ email }).select('+password');

    
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

  
    const token = createToken(user._id);

    
    user.tokens.push({ token });
    await user.save();

    
    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Logout controller
const logout = async (req, res) => {
  try {
    // Remove the current token from user's tokens array
    req.user.tokens = req.user.tokens.filter((tokenObj) => {
      return tokenObj.token !== req.token;
    });

    await req.user.save();

    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


const getProfile = async (req, res) => {
  try {
    res.status(200).json({
      user: {
        id: req.user._id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
        phone: req.user.phone,
        gender: req.user.gender,
        age: req.user.age,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  signup,
  signin,
  logout,
  getProfile,
};