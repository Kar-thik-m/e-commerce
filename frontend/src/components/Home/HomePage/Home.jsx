import React, { useState, useEffect ,} from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Homestyle from "../HomePage/Home.module.css";
import logo from "../../../assets/logo.png";
import Cart from "../Cart/Cart.jsx";
import Search from '../Search/search.jsx';
import Footer from '../Footer/Footer.jsx';
const Home = ({addcart}) => {
    const [product, setproduct] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [searchparams,setsearchparams]=useSearchParams();

    const fetchData = async () => {
      try {
          const response = await fetch("http://localhost:5000/product/items?"+searchparams);
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          setproduct(jsonData);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

    useEffect(() => {
        
        fetchData();
    }, [searchparams]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div >
            <div className={Homestyle.navContainer}>
                <div>
                    <img style={{ width: "4rem" }} src={logo} alt="Logo" />
                    
                </div>

                <Search />

                <div className={`${Homestyle.navList} ${isOpen ? Homestyle.show : ''}`}>
                    <Link to="/items/home">Home</Link>
                    <Link to="/items/Catagorey">Category</Link>
                    <Link to="/items/Orders">Orders</Link>
                    <Link to="/items/FaQ">FAQ</Link>
                </div>

              <div className={Homestyle.res}> 
              <div className={Homestyle.homelogo}>
                 <Link to="/items/Addcart">   <i className="fa fa-cart-arrow-down" aria-hidden="true"> {addcart}</i></Link>
                    <i className="fa fa-heart" aria-hidden="true"></i>
                    <Link to="/items/FaQ"><i className="fa fa-user-circle" aria-hidden="true"></i></Link>
                </div>

                <button className={Homestyle.hamburger} onClick={toggleMenu}>
                    {isOpen ? "=" : "☰"}
                </button>
            </div>
              </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                
                {product.map(product =><Cart product={product} />)} 
            </div>
            <div>
                  <Footer />
            </div>
        </div>
    );
}

export default Home;
