import { connect } from 'react-redux';
import Navigation from './components/Navigation';
import { logout } from 'containers/AuthContainer/meta/actions';
import {getUser} from "containers/AuthContainer/meta/selectors";

const mapStateToProps = (state) => ({
    routes: [
        {
            key: 'home',
            path: 'home',
            text: 'Home' },
        {
            key: 'boards',
            path: 'boards',
            text: 'Boards' 
        }
        ],
    user: getUser(state),
});

const mapDispatchToProps = ({
    logout,
});

const NavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Navigation);

export default NavigationContainer;
