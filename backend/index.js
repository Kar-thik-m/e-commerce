import express  from "express";
import connectToDb from "../backend/connect/mongooseconnect.js";
import itemRouter from "./route/items.js"
import orderRouter from "./route/order.js";
import userRouter from "./route/user.js";
import cors from "cors";
const app = express()
await connectToDb();
app.use(express.json());
app.use(cors());
const PORT =process.env.PORT || 5000;
app.use("/product",itemRouter);
app.use("/order",orderRouter);
app.use("/user",userRouter);

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT,()=>{console.log("run api app")});