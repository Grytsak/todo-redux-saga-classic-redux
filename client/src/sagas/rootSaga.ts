import { all, fork } from 'redux-saga/effects'
import watchUserAuthentication from './authWatchers'
import watchTasks from './tasksWatchers'


function* rootSaga() {
    yield fork(watchUserAuthentication)
    yield fork(watchTasks)
}

export default rootSaga
