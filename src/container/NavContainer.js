import {connect} from 'react-redux';
import Nav from "../components/Nav";
import {logout} from "../actions/index";
import {bindActionCreators} from "redux";

let mapStateToProps=(state)=>{
    return{
        auth: state.auth,
    }
}


let mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({logout:logout},dispatch);
}
let NavContainer= connect(mapStateToProps,mapDispatchToProps)(Nav);

export default NavContainer;

