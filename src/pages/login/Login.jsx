import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { setToken } from '../../context/slices/authSlice'
import './Login.scss'

const intialState ={
    UserName: '',
    password:'',
}

function Login() {
    let dispatch = useDispatch()
    let navigate = useNavigate()

    const [form, setForm] = useState(intialState)

    const handleChange = e => {
        let{name,value} = e.target
        setForm(prev => ({...prev,[name]:value}))
    }

    const handleLogin = e => {
        e.preventDefault()
        if(form.UserName === 'john32' && form.password === '87654321'){
            dispatch(setToken("fake_token"))
            navigate('/admin')
            toast.success('Welcome')
        }
        else{
            toast.error('Username yoki Passworda xato')
            navigate('/login')
        }
    }
    
  return (
    <div>
        <div className="container">
            <div className="Login">
                <form onSubmit={handleLogin} action="">
                    <div className="input">
                        <h1>User Name</h1>
                        <input onChange={handleChange} value={form.UserName} name='UserName' type="text" placeholder='Enter your UserName' />
                    </div>
                    <div className="input">
                        <h1>Password</h1>
                        <input onChange={handleChange} value={form.password} name='password' type="text" placeholder='Enter your Password' />
                    </div>
                    <div className="button_login">
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login