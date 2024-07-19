import React, { useContext, useState } from 'react'
import { toastifyOption } from '../constant';
import { toast } from 'react-toastify';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider';



const Login = () => {
  const [email, setEmail] = useState('amul1423@gmail.com')
  const [password, setPassword] = useState('amul123@gmail.com')
  const [onLoading, setOnLoading] = useState(false)
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const handleLogin = async () => {
    setOnLoading(true)
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/log-in`, { email, password },
        {
          withCredentials: true,
        }
      )
      console.log(data)
      toast.success(data?.message, toastifyOption);
      setIsAuth(true)
      navigate('/')

    } catch (e) {
      console.log(e)
      toast.error(e.response?.data?.message, toastifyOption)
    }
    setOnLoading(false)
  }
  return (
    <div>
      <h2>log in</h2>
      <h3>testing email:amul1423@gmail.com and password:amul123@gmail.com </h3>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name='email' id="email" placeholder='xyz@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder='**********' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button disabled={onLoading} onClick={handleLogin}>Login</button>
      <Link to='/signin'><button>sign in</button></Link>
    </div>
  )
}

export default Login;