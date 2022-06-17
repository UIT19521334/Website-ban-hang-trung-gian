import Authenticate from "../models/authenticate.js";

export const create = async (req, res) => {
  try {
    const { product_id, asker_id, taker_id, size, price } = req.body;

    const newAuth = new Authenticate({
      product_id,
      asker_id,
      taker_id,
      size,
      price,
      fee: (3 * price) / 100,
      status: "Chờ xác nhận",
      active: true,
    });

    const saved = await newAuth.save();

    res.status(200).json(saved);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

export const getAll = async (req, res) => {
  try {
    const auths = await Authenticate.find()
      .populate("product_id")
      .populate({ path: "asker_id", populate: { path: "asker_id" } })
      .populate({ path: "taker_id", populate: { path: "asker_id" } });

    var stt = 1;

    let payload = [];

    for (let auth of auths) {
      const date = new Date(auth.createdAt);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).padLeft();
      const dt = date.getDate().padLeft();
      const h = date.getHours().padLeft();
      const m = date.getMinutes().padLeft();
      const s = date.getSeconds().padLeft();

      let result = {};
      result.stt = stt;
      result.asker = auth.asker_id.asker_id.name;
      result.taker = auth.taker_id.asker_id.name;
      result.product = auth.product_id.name;
      result.size = auth.size;
      result.price = auth.price;
      result.date_sale = [dt, month, year].join("/");
      result.time_sale = [h, m, s].join(":");
      payload.push(result);
      stt++;
    }

    res.status(200).json(payload);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

export const update = async (req, res) => {
  try {
    const auth = await Authenticate.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(auth);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
export const deleteById = async (req, res) => {
  try {
    await Follow.Authenticate(req.params.id);
    res.status(200).json("Has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};
