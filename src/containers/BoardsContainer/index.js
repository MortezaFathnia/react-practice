import { connect } from 'react-redux';
import Boards from './components/Boards';
import {getBoards} from "./meta/actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    getBoards,
});

const BoardsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Boards);

export default BoardsContainer;
