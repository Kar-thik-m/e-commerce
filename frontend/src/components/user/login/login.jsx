import { useState } from "react";
import { backendUrl } from "../../../../config";
import { useNavigate, Navigate } from "react-router-dom";
import Lstyle from "../login/login.module.css";
import Logo from "../../../assets/logo.png";
const Login = () => {
  const navigate = useNavigate();
  const initialState = {
    email: "",
    password: "",
  }
  const [formdata, setFormData] = useState(initialState);
  const handleSubmit = async (e) => {
    e.preventDefault()

    const loginResponse = await fetch(`${backendUrl}/user/login`, {
      method: 'POST',
      body: JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await loginResponse.json();
    if (loginResponse.status === 200) {
      alert('login successful')

      setFormData(initialState)
      navigate("/items/home")
    }
    else {
      alert('login failed')
    }
    if (localStorage.getItem('users') && JSON.parse(localStorage.getItem('users'))) {
      return <Navigate to={'/'} replace />
    }
  }


  const navigateToRegister = () => {
    navigate("/items/register")
  }
  return (
   <div className={Lstyle.whole}>
     
      <section className="container-fluid" >
        <section className="row justify-content-center">
          <section className="col-12 col-sm-6 col-md-4">
          
            <form className={Lstyle.f} >
            <div className={Lstyle.image}>
                <img src={Logo} alt="Logo" />
              </div>
              <h3 style={{ color: "white", fontSize: "bold" }}>Login form</h3>

              <div className="form-group">
                <div>
                  <label style={{ color: "white", fontSize: "bold" }} htmlFor="email" className="m-1">Email</label>
                  <input
                    style={{ color: "black", fontSize: "bold" }}
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
                    style={{ color: "black", fontSize: "bold" }}
                    className="form-control m-1"
                    type="password"
                    name="password"
                    id="password"
                    value={formdata.password}
                    onChange={(e) => setFormData({ ...formdata, password: e.target.value })}
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <button style={{ width: "10rem" }} type="Submit" onClick={handleSubmit} className="btn btn-primary btn-block m-2">Submit</button>&nbsp;&nbsp;&nbsp;

              <div className="form-footer m-1">
                <span><b>You have not account register</b></span>
                <p style={{ color: "white", fontSize: "bold" }}> sign in <button onClick={navigateToRegister} className="btn btn-warning m-4">Register</button></p>

              </div>
            </form >
          </section>
        </section>
      </section>
    
   </div>


  )
}

export default Login;