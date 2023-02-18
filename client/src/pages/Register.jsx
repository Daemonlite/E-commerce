import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")
  const [name,setName] = useState("")
  const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post('http://localhost:7000/api/users/register/', {
          username:name,
          email,
          password,

        })
        .then((res) => {
  
          toast.success('Register successful');
          if (res.data) {
            localStorage.setItem('userInfo', JSON.stringify(res.data));
            navigate('/login');
          }
          setpassword('');
          setEmail('');
        })
        .catch((err) => {
          toast.error(err.response.data);
        });
      }
  return (
<div className="form">
      <div className='register-form'>
    <div className='param'>
      <form onSubmit={handleSubmit}>
        <div className='username'>
          <input
            type='text'
            placeholder='Enter Username..'
            className='username'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
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
        <button
          type='submit'
          className='button'>
          Create Account
        </button>
      </form>

      <p className='link'>
        already have an account ? <a href='/login'>Login</a>
      </p>
      <hr />
    </div>
  </div>
</div>
  )
}

export default Register