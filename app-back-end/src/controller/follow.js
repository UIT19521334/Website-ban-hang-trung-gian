import Follow from "../models/follow.js";

export const create = async (req, res) => {
  try {
    const { user_id, product_id } = req.body;
    const follow = await Follow.find({ user_id, product_id });
    console.log("s", follow);
    if (follow.length > 0 && follow) {
      console.log("ss", follow);
      await Follow.findByIdAndDelete(follow[0]._id);
      return res.status(200).json({ success: true });
    } else {
      const newFollow = new Follow({ user_id, product_id });

      const saved = await newFollow.save();

      res.status(200).json(saved);
    }
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
export const check = async (req, res) => {
  try {
    const { user_id, product_id } = req.body;

    const follow = await Follow.find({ user_id, product_id });

    if (follow.length > 0) res.status(200).json(true);
    else {
      res.status(200).json(false);
    }
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
export const getAll = async (req, res) => {
  try {
    const follows = await Follow.find();
    res.status(200).json(follows);
  } catch (error) {
    res.status(500).json(err);
    console.log(err);
  }
};

export const update = async (req, res) => {
  try {
    const follow = await Follow.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(follow);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
export const deleteById = async (req, res) => {
  try {
    await Follow.findByIdAndDelete(req.params.id);
    res.status(200).json("Has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};
