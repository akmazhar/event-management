
import { useContext } from 'react';
import Logo from './../components/Header/Logo/Logo';
import { Link , NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';



const Navbar = () => {

  const {user, logOut} = useContext(AuthContext)
  console.log(user);
  const handleLogout = () => {
    logOut()
        .then(() => {
            toast.success('log Out Successfully');
        })
        .catch(error => {
            console.log(error.message)
        })
}


    return (

        <div className='bg-cyan-400'>
            <nav className='flex justify-between items-center py-2 shadow-md'>
                <Logo></Logo>


                <ul className='flex gap-5 mr-5 font-mono text-xl font-bold '>
                    <li>
                    <NavLink to="/"
                      className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-white" : ""
                       }
                       >
                        Home
                      </NavLink>
                    </li>


                 

{/* 
                    <li>
                    <NavLink to="/register"
                      className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-white" : ""
                       }
                       >
                      Register
                      </NavLink>
                    </li> */}

                    {
  user ?  <li>
  <NavLink
    to="/login"
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-white" : ""
    }
  ><span>{user.email}</span>
   <button onClick={handleLogout}>Logout</button>
  </NavLink>
</li>
:
<li>
<NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-white" : ""
  }
>
  Login
</NavLink>
</li>

}

           
           
          </ul>

          <li className="list-none">
              {user ? (
              <div className="md:flex gap-2 text-right">

              <button onClick={logOut} className=" bg-black  h-15">
              <Link to={"/login"}><img className="bg-black  h-15"  src="https://i.ibb.co/PcJrTF1/loOUT.png" alt="" /></Link>
              </button>
              </div>
              ) : (
              <button className="btn bg-black  h-15">
              <Link to={"/login"}><img className="bg-black  h-15" src="https://i.ibb.co/Bj482K6/log.png" alt="" /></Link>
              </button>
              )}
              </li>
            
           
            </nav>

        </div>
    );
};

export default Navbar;