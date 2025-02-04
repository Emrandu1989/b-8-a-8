
import { NavLink } from 'react-router-dom';
import CustomSpinner from '../../../components/CustomSpinner/CustomSpinner';

const NavBar = () => {
    const links = <>
          <li> <NavLink to='/' 
           className={({ isActive, isPending }) =>
           isActive
             ? "text-red-600 font-bold text-xl underline"
             : isPending
             ? <CustomSpinner/>
             : ""
         }

          >Home</NavLink>  </li>
          <li> <NavLink to='/donation' 
          className={({ isActive, isPending }) =>
          isActive
            ? "text-red-600 font-bold text-xl underline"
            : isPending
            ? <CustomSpinner/>
            : ""
        }
          >Donation</NavLink>  </li>
          <li> <NavLink to='/statistics'
           className={({ isActive, isPending }) =>
           isActive
             ? "text-red-600 font-bold text-xl underline"
             : isPending
             ? <CustomSpinner/>
             : ""
         }
          >Statistic</NavLink>  </li>
     </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className='w-12 rounded-full' src="/public/istockphoto-1314682498-1024x1024.jpg" alt="" />
              Donation Campaign</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
      
      </div>
    );
};

export default NavBar;