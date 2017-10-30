import {connect} from 'react-redux';
import App from "./../App";

let mapStateToProps=(state)=>{
    return{
        auth: state.auth,
    }
}



let AppContainer= connect(mapStateToProps)(App);

export default AppContainer;