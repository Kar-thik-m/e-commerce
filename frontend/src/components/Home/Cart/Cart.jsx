
import cartstyle from "../Cart/Cart.module.css";
import { Link } from "react-router-dom";

const Cart = ({product}) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3" >

            <div className="card p-3 rounded" >
                <div className={cartstyle.carticon}>
                
                <i class="fa fa-heart-o" aria-hidden="true"></i>
                </div>
                
                <div style={{width:"100%",height:"20vh",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <img style={{width:"10rem"}} className="card-img-top " src={product.images[0].image} alt="Product" />
            
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                        <a href="">{product.name}</a>
                    </h5>
                    <p className="card-text">{product.price}</p>
                   
                 
                    <button   type="button" className="btn btn-primary btn-lg"><Link style={{color:"white"}} to={"/items/products/"+product._id}>View details</Link></button>
                </div>
            </div>
        </div>
    );
}
export default Cart;