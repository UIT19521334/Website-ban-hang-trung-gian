import Sale from "../models/sale.js";

export const create = async (req, res) => {
  try {
    const {
      product_id,
      order_id,
      userTaken,
      size,
      price,
      contactNum,
      address,
    } = req.body;

    const newSale = new Sale({
      product_id,
      order_id,
      userTaken,
      size,
      price,
      address,
      contactNum,
      fee: (10 * price) / 100,
      status: "Chờ xác nhận",
      active: true,
    });

    const saved = await newSale.save();

    res.status(200).json(saved);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
export const getByProductId = async (req, res) => {
  const id = req.params.id;
  try {
    const sales = await Sale.find({ product_id: id });
    res.status(200).json(sales);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getAll = async (req, res) => {
  try {
    const sales = await Sale.find()
      .populate("product_id")
      .populate({ path: "order_id", populate: { path: "asker_id" } })
      .populate({ path: "userTaken" });

    var stt = 1;

    let payload = [];

    for (let sale of sales) {
      const date = new Date(sale.createdAt);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).padLeft();
      const dt = date.getDate().padLeft();
      const h = date.getHours().padLeft();
      const m = date.getMinutes().padLeft();
      const s = date.getSeconds().padLeft();

      let result = {};
      result.stt = stt;

      if (sale.order_id.order_type === "sell") {
        result.asker = sale.order_id.asker_id.name;
        result.taker = sale.userTaken.name;
      } else {
        result.taker = sale.order_id.asker_id.name;
        result.asker = sale.userTaken.name;
      }
      result.status = sale.status;
      result.product = sale.product_id.name;
      result.size = sale.size;
      result.price = sale.price;
      result.date_sale = [dt, month, year].join("/");
      result.time_sale = [h, m, s].join(":");
      result._id = sale._id;
      result.fee = sale.fee;
      payload.push(result);
      stt++;
    }

    res.status(200).json(payload);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

Number.prototype.padLeft = function (base, chr) {
  var len = String(base || 10).length - String(this).length + 1;
  return len > 0 ? new Array(len).join(chr || "0") + this : this;
};

export const getAllSale = async (req, res) => {
  try {
    const sales = await Sale.find().populate("product_id");

    var stt = 1;

    let payload = [];

    for (let sale of sales) {
      const date = new Date(sale.createdAt);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).padLeft();
      const dt = date.getDate().padLeft();
      const h = date.getHours().padLeft();
      const m = date.getMinutes().padLeft();
      const s = date.getSeconds().padLeft();

      let result = {};
      result.stt = stt;
      result.date_sale = [dt, month, year].join("/");
      result.time_sale = [h, m, s].join(":");
      result.product = sale.product_id.name;
      result.size = sale.size;
      result.price = sale.price;
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
    const sale = await Sale.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(sale);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
export const deleteById = async (req, res) => {
  try {
    await Sale.findByIdAndDelete(req.params.id);
    res.status(200).json("Has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};
