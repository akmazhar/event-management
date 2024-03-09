import { useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
// import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
// import { Toast, ToastContainer } from 'react-toastify/dist/components';



const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const emailRef = useRef(null);

const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    
//reset error////////////////////////////

setRegisterError('');
setSuccess('');


   if(password.length < 6 ) {
    setRegisterError(
              'Password should be at best six characters.'
            );
            return;
   }
    else if (!/[a-z]/.test(password)) {
        setRegisterError(
            'Password should be at least one uppercase.'
          );
          return;
    }

    else if (!/[!@#$%^&*]/.test(password)) {
        setRegisterError(
            'Password should be at least one special character.'
          );
          return;
    }

   

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setRegisterError('');
        // setSuccess('User Created Successfully');
        // Toast.success('User Created Successfully');
        updateProfile(result.user, {
    
            displayName: name,
            photoURL: "https://i.ibb.co/QnqFLDG/j.png"
            })
            .then(()=> {
              // Toast.success('User Created Successfully');
                window.location.reload();
                setSuccess('User Created Successfully');
                return Swal.fire({
                  icon: "success",
                  title: "Successfully registered",
                  text: "Thank you!",
                });
            })
            .catch(error => {
                console.log(error)
            })
      
      })
      .catch((error) => {
        console.error(error);
        setRegisterError('Failed to create user. Please try again.');
        setSuccess('');
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };




    return (
      <div>
      
      <div className='grid  md:grid-cols-2 items-start'>
  
    <div>
       <div className="hero man-w-screen  rounded-e-3xl">
       <div className="hero-content grid-col">
       <div className="card flex-shrink-0 w-full max-w-lg shadow-3xl mr-52 bg-white  shadow-red-600 rounded-e-3xl rounded-s-md">
       <img className=' mr-20 ml-48 w-80 mb-44 mt-36' src="https://i.ibb.co/VWrW7X8/Screenshot-2023-10-28-180229.png" alt="" />
       <div>
    
      </div>    
      </div>
      <div>
     
        
        {/* <div className="text-left lg:text-left">
          <h1 className="text-5xl text-green-600 font-mono font-semibold">Register Now!</h1>
        </div> */}
  
          <form onSubmit={handleRegister} className="card-body mr-20 mt-5 shadow-2xl shadow-red-800 py-10 px-10 mb-5 rounded-e-full bg-fuchsia-50">
      

          <div className="form-control">
                <label className="label">
                  <span className="label-text ml-3 text-base  text-blue-600  font-serif">Your Name</span>
                </label>
                <input
                      type="text"
                      placeholder="User Name"
                      name="name"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
    
                  <label className="label">
                    <span className="label-text ml-3 text-base  text-blue-600  font-serif">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    placeholder="Your Photo URL"
                    name="photo"
                    className="input input-bordered"
                  />
    
                  <label className="label">
                    <span className="label-text ml-3 text-base  text-blue-600  font-serif">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
    
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text ml-3 text-base  text-blue-600 font-serif">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="input input-bordered"
                      required
                    />
    
    
    
    
    {/* <span className="relative  -right-60" onClick={() => setShaowPassword(!showPassword)}>
              {
                showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
              }
              </span>  */}
    
    
    
    
                    <label className="label">
                      <ul>
                        <li>
                          <a
                            href="#"
                            className="label-text-alt link text-center font-serif text-red-500 link-hover"
                          >
                            Forgot password?
                          </a>
                        </li>
                        <li>
                          <input
                            className="font-sans"
                            type="checkbox"
                            name="terms"
                            id="terms"
                          />
                          <label className="textarea" htmlFor="terms">
                            Accept our <a href="#">Terms and Condition</a>
                          </label>
                        </li>
                      </ul>
                    </label>
                  </div>
                  <div className="form-control">
                    <button className="btn bg-green-600 text-white font-semibold">
                      Submit
                    </button>
                  </div>
    
              
              {registerError && <p className="text-red-700">{registerError}</p>}
              {success && <p className="text-green-700">{success}</p>} 

              <p className="font-serif text-start ml-24">
    <i>  Already have an account? So
      
      <Link className="font-serif" to="/login">
        <button className="btn btn-link text-green-700 font-bold">Login</button>
      </Link>

    first.</i>
    </p>

    <p className="   font-mono py-5 font-semibold  text-orange-800 text-center items-center" >Or Login With</p> <p>
        <button onClick={handleGoogleSignIn}
          className="btn bg-black rounded-s-3xl mb-5 rounded-e-3xl px-32 ml-32 mr-32 py-3  text-orange-300"
        >
          <FcGoogle className='w-8 h-6'></FcGoogle>
        </button>
      </p>
      </form>
            </div>
          </div>
           {/* <ToastContainer></ToastContainer>  */}
        </div>
        </div>
       </div>
      </div>
  
    );
};

export default Register;