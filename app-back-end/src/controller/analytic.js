import Authenticate from "../models/authenticate.js";
import Order from "../models/order.js";
import Product from "../models/product.js";
import Sale from "../models/sale.js";
import User from "../models/user.js";

export const getAll = async (req, res) => {
  try {
    const auths = await Authenticate.find();
    const products = await Product.find();
    const users = await User.find();
    const orders = await Order.find();
    const sales = await Sale.find();

    const curDate = new Date();
    const curYear = curDate.getFullYear();
    const curMonth = (curDate.getMonth() + 1).padLeft();
    const curDt = curDate.getDate().padLeft();

    const filteredSales = sales.filter((sale) => {
      //   const date = new Date(auth.createdAt);
      //   const month = (date.getMonth() + 1).padLeft();
      return !sale.active /*&& month == curMonth*/;
    });

    let revenue = 0;

    for (let sale of filteredSales) {
      revenue += sale.fee;
    }

    let totalProducts = products.length;

    const filteredUser = users.filter((user) => {
      return user.role === "user";
    });

    let totalUsers = filteredUser.length;

    let totalNewUsers = 0;

    for (let user of filteredUser) {
      const date = new Date(user.createdAt);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).padLeft();
      const dt = date.getDate().padLeft();

      if (year == curYear && month == curMonth && dt == curDt) {
        totalNewUsers++;
      }
    }

    const filteredOrderSell = orders.filter((order) => {
      return order.order_type === "sell" && order.active;
    });

    const filteredOrderBuy = orders.filter((order) => {
      return order.order_type === "buy" && order.active;
    });

    let totalSells = filteredOrderSell.length;
    let totalBuys = filteredOrderBuy.length;

    const totalSales = filteredSales.length;

    res.status(200).json({
      revenue,
      totalProducts,
      totalUsers,
      totalNewUsers,
      totalSells,
      totalBuys,
      totalSales,
    });
  } catch (err) {
    res.status(500).json({ error: err });
    console.log(err);
  }
};

Number.prototype.padLeft = function (base, chr) {
  var len = String(base || 10).length - String(this).length + 1;
  return len > 0 ? new Array(len).join(chr || "0") + this : this;
};
