import { connect } from 'react-redux';
import Tasks from './components/Tasks';
import {getTasks} from "./meta/actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    getTasks,
});

const TasksContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Tasks);

export default TasksContainer;
