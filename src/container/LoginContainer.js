import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoginPage from "../components/Login";
import { setAdmin, setUser} from "../actions/index";
import All from "../components/Main";

let mapStateToProps=(state)=>{
    return {
        auth: state.auth
    };
}

let mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({setAdmin: setAdmin,setUser: setUser},dispatch);
}
let Login = connect(mapStateToProps,mapDispatchToProps)(LoginPage);
export default Login;