import express from "express";
import { ItemModel } from "../model/itemmodel.js";

const itemRouter = express.Router();

itemRouter.post("/upload", async (req, res) => {
    try {
        const item = new ItemModel({ ...req.body });
        await item.save();
        res.send({ msg: 'Item created' });
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error in creating item' });
    }
});



itemRouter.get("/items", async (req, res) => {
    try {
        const query = req.query.keyword?{ name : { 
            $regex: req.query.keyword,
            $options: 'i'
         }}:{}
        const items = await ItemModel.find(query);
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

itemRouter.get("/items/:id", async (req, res) => {
    try {
        const item = await ItemModel.findById(req.params.id); 
        if (!item) {
            return res.status(404).send({ msg: 'Product not found' });
        }
        res.send({ msg: 'Product found',item});
    } catch (err) {
        console.error(err);
        res.status(500).send({ msg: 'Error in finding item' });
    }
});

export default itemRouter;
