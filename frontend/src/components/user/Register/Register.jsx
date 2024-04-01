import { useState } from "react";
import { backendUrl } from "../../../../config";
import { useNavigate } from "react-router-dom";
import Rstyle from "../Register/Register.module.css";
import Logo from "../../../assets/logo.png"
import {toast} from 'react-toastify';
const Register = () => {
  const navigate = useNavigate(); 

  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const [formdata, setFormData] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registerResponse = await fetch(`https://e-commerce-1-3t4x.onrender.com/user/register`, {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await registerResponse.json();
    if (registerResponse.status === 200) {
      toast.success('Register successful');
      setFormData(initialState);
      navigate("/items/login");
    } else {
      toast.success('Register failed. Please try another email.');
    }
    console.log(data);
    setFormData(initialState);
  };

  const navigateToLogin = () => {
    navigate("/items/login"); 
  };

  return (
    <div className={Rstyle.whole}>
      <section className="container-fluid">
        <section className="row justify-content-center">
          <section className="col-12 col-sm-6 col-md-4">
            <form className={Rstyle.f}>
              <div className={Rstyle.image}>
                <img src={Logo} alt="Logo" />
              </div>
              <h3>Register form</h3>
              <div className="form-group">
                <label style={{ color: "white", fontSize: "bold" }} htmlFor="name" className="m-1">Name</label>
                <input
                  className="form-control m-1"
                  type="text"
                  name="text"
                  id="text"
                  value={formdata.name}
                  onChange={(e) => setFormData({ ...formdata, name: e.target.value })}
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label style={{ color: "white", fontSize: "bold" }} htmlFor="email" className="m-1">Email</label>
                <input
                  className="form-control m-1"
                  type="email"
                  name="email"
                  id="email"
                  value={formdata.email}
                  onChange={(e) => setFormData({ ...formdata, email: e.target.value })}
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label style={{ color: "white", fontSize: "bold" }} htmlFor="password" className="m-1">Password</label>
                <input
                  className="form-control m-1"
                  type="password"
                  name="password"
                  id="password"
                  value={formdata.password}
                  onChange={(e) => setFormData({ ...formdata, password: e.target.value })}
                  placeholder="Enter your password"
                />
              </div>
              <button style={{ width: "10rem" }} type="Submit" className="btn btn-primary btn-block m-2" onClick={handleSubmit}>Submit</button>
              <div className="form-footer m-1">
                <p style={{ color: "white", fontSize: "bold" }}>Already have an account? <button onClick={navigateToLogin} className="btn btn-success m-4">Login</button></p>
              </div>
            </form>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Register;