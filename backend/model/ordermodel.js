import mongoose from "mongoose";
const orderSchema=new mongoose.Schema({
    cartitems:Array,
    amount:String,
    status:String,
    createdat:Date
})
export const orderModel=mongoose.model("Order",orderSchema);