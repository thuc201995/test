import {connect} from 'react-redux';
import List from "../components/List";
import {bindActionCreators} from "redux";
import {AbsenceDetail, filterTable, showDetail} from "../actions/index";

let mapStateToProps=(state)=>{
    return{
        auth: state.auth,
        list: state.list,
        filterAbsence: state.filterAbsence,
        toggleModal: state.toggleModal
    }
}

let mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({filterTable:filterTable,showDetail:showDetail,AbsenceDetail:AbsenceDetail},dispatch);

}

let ListContainer= connect(mapStateToProps,mapDispatchToProps)(List);

export default ListContainer;