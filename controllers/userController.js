import UserModel from '../models/userModel.js';

export const createGuestUser = async (req, res, next) => {
  try {
    const newUser = new UserModel({ userType: 'guest' });
    await newUser.save();
    res.status(201).json({ message: 'Guest user created', user: newUser });
  } catch (error) {
    next(error); 
  }
};


export const getGuestUser = async (req, res, next) => {
  try {
    const users = await UserModel.find({ userType: 'guest' });
    res.json(users);
  } catch (error) {
    next(error);
  }
};