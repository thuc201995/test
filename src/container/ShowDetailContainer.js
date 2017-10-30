import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {closeDetail, updateStatus} from "../actions/index";
import ShowDetail from "../components/ShowDetail";

let mapStateToProps =(state)=>{
    return {
        toggleModal: state.toggleModal,
        list:state.list,
        detail:state.showDetail,
        auth:state.auth
    }

}


let mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({closeDetail:closeDetail,updateStatus},dispatch)
}

let ShowDetailContainer= connect(mapStateToProps,mapDispatchToProps)(ShowDetail);

export default ShowDetailContainer;