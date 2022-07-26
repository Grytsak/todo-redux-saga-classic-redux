import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { registerUserAction } from '../../actions/users'

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
    const { name, email, password, password2 } = formData
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
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    } 

    const onSubmit = (e: any) => {
        e.preventDefault()

        const userData = {
            name,
            email,
            password
        }

        dispatch(registerUserAction(userData))
    }

    return(
        <div>
            <h1>Register New User</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        type='text'
                        id='text'
                        name='name'
                        value={name}
                        placeholder='Enter your name'
                        onChange={onChange}
                    />
                </div>
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
                    <input
                        type='text'
                        id='password2'
                        name='password2'
                        value={password2}
                        placeholder='Confirm your password'
                        onChange={onChange}
                    />
                </div>
                <div>
                    <button>Submit</button>
                    <Link to='/login'>Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Register