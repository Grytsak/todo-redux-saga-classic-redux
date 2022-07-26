import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginUserAction } from '../../actions/users'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { email, password } = formData
    const { user, isError, isSuccess, message } = useSelector((state: any) => state.users)
    
    useEffect(() => {
        if (isError) {
            console.log(message)
        }

        if (user && user._id) {
            navigate('/')
        }
    },[user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e: any) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e: any) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(loginUserAction(userData))
    }

    return (
        <div>
            <h1>Login User</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={email}
                        placeholder='Enter your email'
                        onChange={onChange}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        id='password'
                        name='password'
                        value={password}
                        placeholder='Enter your password'
                        onChange={onChange}
                    />
                </div>
                <div>
                    <button>Submit</button>
                    <Link to='/register'>Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Login