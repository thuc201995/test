import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import SideBar from "../components/SideBar";
import {logout, showModal} from "../actions/index";

let mapStateToProps =(state)=>{
   return {
       toggleModal: state.toggleModal
   }

}


let mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({showModal:showModal,logout:logout},dispatch)
}

let SidebarContainer= connect(mapStateToProps,mapDispatchToProps)(SideBar);

export default SidebarContainer;