const bcrypt = require('bcryptjs');
const User = require('../models/user');

const checkUsername = async (req, res) => {
  const { username } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(200).json({ isUnique: false });
    }
    res.status(200).json({ isUnique: true });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const registerUser = async (req, res) => {
  const { name, email, username, password, cprating, userlanguage } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const user = await User.create({
      name,
      email,
      username,
      password,
      cprating,
      userlanguage,
    });

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Email not registered' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: 'Wrong password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const checkEmail = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    res.json({ isUnique: !user });
  } catch (err) {
    console.log('Error checking email:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getUserRanking = async (req, res) => {
  const { email } = req.body;
  try {
    const users = await User.find().sort({ cprating: -1 });
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const userRank = users.findIndex(u => u.email === email) + 1;

    res.status(200).json({ ranking: userRank || 'Unranked' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const updateUserInfo = async (req, res) => {
  const { email, username, cprating, userlanguage } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.username = username || user.username;
    user.cprating = cprating || user.cprating;
    user.userlanguage = userlanguage || user.userlanguage;

    await user.save();

    res.status(200).json({ message: 'Profile updated successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const checkUsernameForUpdate = async (req, res) => {
  const { email, username } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user && user.email !== email) {
      return res.status(200).json({ isUnique: false });
    }
    res.status(200).json({ isUnique: true });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  checkUsername,
  registerUser,
  loginUser,
  checkEmail,
  getUserRanking,
  updateUserInfo,
  checkUsernameForUpdate
};
