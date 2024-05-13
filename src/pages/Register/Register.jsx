import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const {createUser}= useContext(AuthContext)
  const navigate = useNavigate()

    const handleRegister = e =>{
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const email = form.get('email');
      const name = form.get('name');
      const photo = form.get('photo');
      const password = form.get('password');
      console.log(name,photo, email,password);
      // create user
      createUser(email,password)
      .then(navigate('/'))
      .catch()
    }
  return (
   <div>
  <Navbar></Navbar>
    <div className="hero min-h-screen bg-base-200">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className="text-center text-2xl mt-6 font-semibold">Register</h2>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
             
            </form>
            <p className="text-center mb-4">already have acccount? <Link className="text-pink-400" to='/login'>Login here</Link></p>
          </div>
        </div>
          
   </div>
  );
};

export default Register;