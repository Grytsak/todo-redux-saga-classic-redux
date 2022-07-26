import { connect } from 'react-redux'
import TaskList from './TaskList'
import { getAllTasksAction } from '../../actions/tasks'

const mapStateToProps = (state: any) => {
  console.log('global state:', state)
  return { 
    tasks: state.tasks.tasks,
    user: state.users.user,
    latesAddedTask: state.tasks.latesAddedTask
  }
}


const mapDispatchToProps = (dispatch: any) => {
    return {
      getAllTasksAction: () => dispatch(getAllTasksAction())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
