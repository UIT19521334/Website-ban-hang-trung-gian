import Rule from "../models/rule.js";

export const getAll = async (req, res) => {
  try {
    const rules = await Rule.find();
    res.status(200).json(rules);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const update = async (req, res) => {
  try {
    const updated = await Rule.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

export const create = async (req, res) => {
  const newRule = new Rule(req.body);

  try {
    const saved = await newRule.save();
    res.status(200).json(saved);
  } catch (err) {
    res.status(500).json(err);
  }
};
