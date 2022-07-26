import React from 'react'
import ReactDOM  from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import createSagaMiddleware from "redux-saga"
import { combineReducers, createStore, applyMiddleware } from 'redux'
import App from './App'
import users from './reducers/users'
import tasks from './reducers/tasks'
import rootSaga from './sagas/rootSaga'

const sagaMiggleware = createSagaMiddleware()
const rootReducer = combineReducers({ users, tasks })
const store = createStore(rootReducer, applyMiddleware(sagaMiggleware))

sagaMiggleware.run(rootSaga)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)