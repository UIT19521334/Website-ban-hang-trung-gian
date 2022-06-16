import Sale from "../models/sale.js";

export const create = async (req, res) => {
  try {
    const { order_id, product_id, size, date, price, active } = req.body;

    const newSale = new Sale({
      // order_id,
      product_id,
      size,
      date,
      price,
      active,
    });

    const saved = await newSale.save();

    res.status(200).json(saved);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

Number.prototype.padLeft = function (base, chr) {
  var len = String(base || 10).length - String(this).length + 1;
  return len > 0 ? new Array(len).join(chr || "0") + this : this;
};

export const getAll = async (req, res) => {
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
    res.status(500).json(err);
    console.log(err);
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
