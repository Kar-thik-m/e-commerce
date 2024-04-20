import Detailstyle from "../Productdetails/Detailscart.module.css";
import { backendUrl } from "../../../../config";
import { toast } from 'react-toastify';

const Detailscart = ({ addcart, setaddcart }) => {
    console.log(addcart);

    const removeItem = (item) => {
        const updatedItems = addcart.filter((pro) => pro.product._id !== item.product._id);
        setaddcart(updatedItems);
    };

    const buy = async () => {
        const totalPrice = addcart.reduce((acc, item) => acc + item.product.price * item.qty, 0);
        
        const options = {
            key: "rzp_test_2sglITYoavfAoD",
            key_secret: "HJQQMjgxahtHetGhOSIeefS0",
            amount: totalPrice * 100, 
            currency: "INR",
            name: "STARTUP_PROJECTS",
            description: "for testing purpose",
            handler: function(response) {
                alert(response.razorpay_payment_id);
            },
            prefill: {
                name: "Karthik",
                email: "sparrowkarthik007@gmail.com",
                contact: "9361238910"
            },
            notes: {
                address: "Razorpay Corporate office"
            },
            theme: {
                color: "#3399cc"
            }
        };

        const pay = new window.Razorpay(options);
        pay.open();
    };

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Cart Items {addcart.length}</h1>
            <div className={Detailstyle.whole}>
                <div className={Detailstyle.left}>
                    {addcart.map((item) => (
                        <div className={Detailstyle.details} key={item.product.name}>
                            <div className={Detailstyle.image}>
                                <img src={item.product.images[0].image} alt={item.product.name} />
                            </div>
                            <div>{item.product.name}</div>
                            <div>{item.product.price}</div>
                            <div>{item.qty}</div>
                            <div className={Detailstyle.delete}>
                                <i className="fa fa-trash" onClick={() => removeItem(item)} aria-hidden="true"></i>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={Detailstyle.right}>
                    <h1>Order Summary</h1>
                    <hr />
                    <p className={Detailstyle.subtotal}>Subtotal:  <span className={Detailstyle.total}>{addcart.reduce((acc, item) => (acc + item.qty), 0)} (Units)</span></p>
                    <p className={Detailstyle.subtotal}>Total: <span className={Detailstyle.total}>${Number(addcart.reduce((acc, item) => (acc + item.product.price * item.qty), 0)).toFixed(2)}</span></p>
                    <button onClick={buy} type="button" className="btn btn-primary btn-lg"><i className="fa fa-credit-card-alt" aria-hidden="true"></i> Buy</button>
                    <hr />
                </div>
            </div>
        </>
    );
};

export default Detailscart;
