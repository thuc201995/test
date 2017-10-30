import {connect} from 'react-redux';
import Main from "../components/Main";

let mapStateToProps=(state)=>{
    return {
        auth: state.auth
    };
}


let MainContainer=connect(mapStateToProps)(Main);
export default MainContainer;