import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {addAbsence,closeModal} from "../actions/index";
import AddAbsence from "../components/Add";

let mapStateToProps=(state)=>{
    return{
        absence: state.absence,
        toggleModal: state.toggleModal

    }
}

let mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({addAbsence: addAbsence,closeModal:closeModal},dispatch)

}
let AddContainer= connect(mapStateToProps,mapDispatchToProps)(AddAbsence);

export default AddContainer;