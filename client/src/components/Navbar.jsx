import { useState,useEffect } from 'react'
import {BsCart3} from 'react-icons/bs'
import {FaUserAlt} from  'react-icons/fa' 
import { CartState } from '../Context'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const { cartItem}= CartState()

  const navigate = useNavigate()

  const [user,setuser] = useState("")
  const logout=()=>{
    localStorage.removeItem("userInfo");
    navigate('/login')
 }
  useEffect(() => {
      const User = JSON.parse(localStorage.getItem("userInfo"));
      setuser(User)
      
    },[]);
  return (
    <div className='all'>
      <div className="nav">
      <div className="nav-brand">
           <a href="/">Sigma</a>
        </div>

        <form className="nosubmit">
              <input className="nosubmit" type="search" placeholder="Search Sigma" />
          </form>

        <div className="left">
         
       {user && <div type="button" className=" position-relative ">
<a href="/cart">  <BsCart3 size={30}/></a>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cart" count={cartItem}>
    
    <span className="visually-hidden">cart items</span>
  </span>
</div>}
       
       
        <div className="dropdown">
  <div className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <FaUserAlt/>
  </div>
  <ul className="dropdown-menu">
    <li>{!user &&<a className="dropdown-item text-center" href="/login ">Login</a>}</li>
    <li> {user &&  <div onClick={logout} className="dropdown-item text-center" >Logout</div> }</li>
    <li><p className="dropdown-item text-center"  >{ user && user.username}</p></li>

  </ul>
</div>
        
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Navbar