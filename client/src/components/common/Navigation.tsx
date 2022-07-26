import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logOutAction } from '../../actions/users'

const Navigation = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const onLogout = () => {
        dispatch(logOutAction())
        localStorage.removeItem('user')
        navigate('/login')
    }

    return (
        <div>
            <ul>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><button onClick={onLogout}>Logout</button></li>
            </ul>
        </div>
    )
}

export default Navigation