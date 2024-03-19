import express  from "express";
import { orderModel } from "../model/ordermodel.js";

const orderRouter = express.Router();



orderRouter.post('/orderitems', async (req, res) => {
  try {
    const cartitems = req.body;
    const createdat = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    const amount= cartitems.reduce((acc,item)=>parseInt((acc+item.orderproducts.price * item.qyt)).toFixed(2),0);
   const order= await orderModel.create({cartitems,createdat,amount});
    res.json({ order });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


export default orderRouter;