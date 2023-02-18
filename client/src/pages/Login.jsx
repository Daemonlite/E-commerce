import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
const Login = () => {
  const [email, setEmail] = useState("")
const [password, setpassword] = useState("")
const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:7000/api/users/login/', {
        email,
        password,
      })
      .then((res) => {

        toast.success('login successful');
        if (res.data) {
          localStorage.setItem('userInfo', JSON.stringify(res.data));
          navigate('/');
        }
        setpassword('');
        setEmail('');
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  }
  return (
  
<div className="form" >
<div className='login-form'>
        <div className='param'>
          <form onSubmit={handleSubmit}>
            <div className='email'>
              <input
                type='email'
                placeholder='Enter Email..'
                className='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className='password'>
              <input
                type='password'
                placeholder='Enter Password...'
                className='password'
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <br />
            <br />
            <button
              type='submit'
              className='button'>
              Log In
            </button>
          </form>

          <div className='forgot'>
            <a href='/forgot'>forgot password ?</a>
          </div>
          
          <div className='create'>
            <a
              href='/register'
              className='lik'>
              Create Account
            </a>
          </div>
        </div>
        </div>
</div>
  )
}

export default Login