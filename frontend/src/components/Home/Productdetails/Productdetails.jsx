
import Pdstyle from "../Productdetails/Pdetails.module.css"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { backendUrl } from "../../../../config";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
const Productdetails = ({ addcart, setaddcart }) => {
    const [qty, setQty] = useState(1);
    const [product, setProduct] = useState([]);
const navigate=useNavigate();
    const { id } = useParams();

    const Addtocart = () => {
        const find = addcart.find((item) => product._id == item._id)

        if (!find) {
            const newitem = { product,qty }
            setaddcart((items) => ([...items, newitem]));
            toast("Cart Item added succesfully!")
            navigate("/items/home")
        } else {
            toast("Cart Item already added")
        }

    }
    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await fetch(`${backendUrl }/product/items/${id}`);
                const jsonData = await response.json();
                setProduct(jsonData.item);
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDetails();
    }, []);
    function increaseQty() {
        if (qty < 1) {
            return;
        }
        setQty((state) => state + 1);
    }

    function decreaseQty() {
        if (qty > 1) {
            setQty((state) => state - 1);
        }
    }
    return (
        <>
        <h3 style={{textAlign:"center",paddingTop:"2rem"}}>Products </h3>
            <div className={Pdstyle.whole}>
                <div className={Pdstyle.left}>
               <img src={product.image}></img>
                </div>
                <div className={Pdstyle.right}>
                    <div>
                    {product.name}
                    </div>
                  
                    <div>
                    ${product.price}
                    </div>
                    <div>
                    {product.description}
                    </div>
                    <div>
                    {product.stock}
                    </div>
                    <div>
                    {product.seller}
                    </div>
                    <div className={Pdstyle.stockCounter}>
                        <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>

                        <input type="number" class="form-control count d-inline" value={qty} readOnly />

                        <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
                        
                    </div>
                    <div className={Pdstyle.button}>
                            <button onClick={Addtocart} type="button" className="btn btn-primary btn-lg"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i>  Add Card</button>
    
                        </div>
                </div>
            </div>
           
        </>

    );
}
export default Productdetails;