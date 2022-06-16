import User from "../models/user.js";
import bcrypt from "bcrypt";
// const Profile = require('../models/profile');

export const getAll = async (req, res) => {
  try {
    var users = await User.find();

    let listCustomer = [];

    var x = 1;

    for (var i = 0; i < users.length; i++) {
      let us = JSON.parse(JSON.stringify(users[i]));
      // let profile = await Profile.find({ account: us._id });
      // us.profile = profile;
      if (us.role === "user") {
        us.id = x;
        listCustomer.push(us);
        x++;
      }
    }
    res.status(200).json({
      listCustomer: listCustomer,
    });
  } catch (err) {
    res.status(500).json({ error: err });
    console.log(err);
  }
};

export const getById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const profile = await Profile.findOne({ account: user._id });
    let res_user = JSON.parse(JSON.stringify(user));
    res_user.profile = profile;
    res.status(200).json(res_user);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// exports.create = async (req, res) => {
//   const newUser = new User(req.body);

//   try {
//     const saved = await newUser.save();
//     res.status(200).json(saved);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

// exports.update = async (req, res) => {
//   try {
//     const updated = await Vehicle.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     res.status(200).json(updated);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

export const update = async (req, res) => {
  try {
    const updateData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      contactNumber: req.body.contactNumber,
      email: req.body.email,
    };
    const updated = await User.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
    if (updated) {
      return res.status(200).json({
        success: true,
        user: updated,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "missing value",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "server has problem",
    });
  }
};

export const updatePassword = async (req, res) => {
  try {
    const data = {
      oldPassword: req.body.oldPassword,
      newPassWord: req.body.newPassword,
      id: req.body.id,
    };
    const user = await User.findById(data.id);
    const checkPassword = bcrypt.compareSync(
      data.oldPassword,
      user.hash_password
    );
    if (checkPassword) {
      const newHash_password = await bcrypt.hash(data.newPassWord, 10);
      const updated = await User.findByIdAndUpdate(
        data.id,
        {
          hash_password: newHash_password,
        },
        { new: true }
      );
      if (updated) {
        return res.json({
          success: true,
          user: updated,
        });
      } else {
        return res.status(401).json({
          success: false,
          message: "something wrong",
        });
      }
    } else {
      return res.status(400).json({
        success: false,
        message: "fail password",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "false",
      message: "sever has problem",
    });
  }
};

// exports.deleteById = async (req, res) => {
//   try {
//     await Vehicle.findByIdAndDelete(req.params.id);
//     res.status(200).json("Has been deleted");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };
