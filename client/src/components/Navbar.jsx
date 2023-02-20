import { useState,useEffect } from 'react'
import {BsCart3} from 'react-icons/bs'

import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  

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
      <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">SigmaMart</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">SigmaMart</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Services</a>
          </li>
        {user && <li className="nav-item">
            <a className="nav-link" href="/cart"><BsCart3/>cart</a>
          </li>}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Products
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="/clothing">Clothing</a></li>
              <li><a className="dropdown-item" href="/kitchen">Kitchen</a></li>
              <li><a className="dropdown-item" href="/beauty">Beauty Products</a></li>
              <li><a className="dropdown-item" href="/fitness">Gym/Fitness</a></li>
              <li><a className="dropdown-item" href="/electronics">Electronics</a></li>
              <li><a className="dropdown-item" href="/gaming">Gaming</a></li>
              <li><a className="dropdown-item" href="/furniture">Home/office Furniture</a></li>
              <li>
              </li>
              <li><a className="dropdown-item" href="/">Health & personal care</a></li>
            </ul>
          </li>
          {user ? (
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Profile
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="/">welcome {user.username}</a></li>
              <li className="dropdown-item" onClick={logout}>Logout</li>
             
              <li>
              </li>
              
            </ul>
          </li>
          ):(
            <li><a className="dropdown-item" href="/login">Login</a></li>
          )}
          
        </ul>

      </div>
    </div>
  </div>
</nav>
      <br />
      <br />
      <br />
    </div>
  )
}

export default Navbar