import mongoose from "mongoose";
const itemSchema=new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    reting:String,
    images:[
        {
            image:String
        }
    ],
    category:String,
    seller:String,
    stock:String ,
    numberofview:String
});
export const ItemModel = mongoose.model('items ',itemSchema);