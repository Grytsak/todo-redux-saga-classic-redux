import { Routes, Route } from 'react-router-dom'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import TaskListContainer from './components/tasks/TaskListContainer'
import AddNewTask from './components/tasks/AddNewTask'
import NavigationContainer from './components/common/NavigationContainer'


const App = () => {
    return(
        <div>
            <h1>todo-redux-saga-redux-classic</h1>
            <Routes>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/' element={<NavigationContainer />}>
                    <Route path='/' element={<><AddNewTask /><TaskListContainer /></>}></Route>
                </Route>
            </Routes>
        </div>
    )
}

export default App