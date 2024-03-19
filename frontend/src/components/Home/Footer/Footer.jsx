import Foostyle from "../Footer/Footer.module.css";
const Footer = () => {
    return (
        <div>
            <div className={Foostyle.container}>

                   <i className="fa fa-vimeo" aria-hidden="true"></i>
                        <i className="fa fa-instagram" aria-hidden="true" style={{ marginLeft: "10px" }}></i>
                        <i className="fa fa-youtube" aria-hidden="true" style={{ marginLeft: "10px" }}></i>
                        <i className="fa fa-facebook" aria-hidden="true" style={{ marginLeft: "10px" }}></i>
                        
                    <div style={{color:"gray"}}>
                        <b>ljvljdalvn@kep</b>
                    </div>
                    
            
            </div>
        </div>
    );
}
export default Footer