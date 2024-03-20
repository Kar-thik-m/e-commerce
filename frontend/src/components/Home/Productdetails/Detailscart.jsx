
import Detailstyle from "../Productdetails/Detailscart.module.css"
import { backendUrl } from "../../../../config";
import {toast} from 'react-toastify';
const Detailscart = ({ addcart, setaddcart }) => {
console.log(addcart)
    const removeItem = (item) => {
        const updatedItems = addcart.filter((pro) => {
            if (pro.product._id !== item.product._id) {
                return true;
            }
        })
        setaddcart(updatedItems)
    }
    const buy=async()=> {
        try {
            const response = await fetch('https://e-commerce-1-3t4x.onrender.com/order/orderitems', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(addcart)
            });
    
            if (response.ok) {
                setaddcart ([]);
               
                toast.success("Order Success!");
            } else {
              
                console.error('Failed to place order');
            }
        } catch (error) {
            
            console.error('Failed to connect to server:', error);
        }
    }
    
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Cart Items {addcart.length}</h1>
            <div className={Detailstyle.whole}>
                <div className={Detailstyle.left}>
                    {addcart.map((item) => (
                       
                        <div className={Detailstyle.details} key={item.product.name}>
                            <div className={Detailstyle.image}>
                             
                             <img src={item.product.images[0].image}></img>
                            </div>
                            <div>
                            { item.product.name}
                            </div>
                            <div>
                            { item.product.price}
                            </div>
                            <div>
                            { item.qyt}
                            </div>
                            <div className={Detailstyle.delete}>
                                <i class="fa fa-trash" onClick={() => removeItem(item)} aria-hidden="true"></i>
                            </div>
                        </div>
                    ))}

                </div>
                <div className={Detailstyle.right}>
                    <h1> Order Summery</h1>
                    <hr />
                    <p className={Detailstyle.subtotal}>Subtotal:  <span className={Detailstyle.total}>{addcart.reduce((acc, item) => (acc + item.qty), 0)} (Units)</span></p>
                    <p className={Detailstyle.subtotal}> total: <span  className={Detailstyle.total}>${Number(addcart.reduce((acc, item) => (acc + item.product.price * item.qty), 0)).toFixed(2)}</span></p>
                    <button onClick={buy} type="button" className="btn btn-primary btn-lg"><i class="fa fa-credit-card-alt" aria-hidden="true"></i>  Buy</button>
                    <hr />
                </div>
            </div>
        </>
    );
}
export default Detailscart;