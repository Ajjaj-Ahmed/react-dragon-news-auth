import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const {loginUser} = useContext(AuthContext);
  const location = useLocation();
  //console.log('location from login: ', location);
  const navigate = useNavigate();

  const handleLogin = e =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email =  form.get('email');
    const password = form.get('password')
    console.log(email,password)

    loginUser(email, password)
    .then(
      // navigate after login
      navigate(location?.state ? location.state : '/'))

    .catch()
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className="text-center text-2xl mt-6 font-semibold">Login</h2>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
             
            </form>
            <p className="text-center mb-4">Do not have account? <Link className="text-pink-400" to='/register'>Register here</Link></p>
          </div>
        </div>
      </div>
  );
};

export default Login;