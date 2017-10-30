import * as actionTypes from "../constants/actionTypes";

let defaultState ={
    id:""
}
let showDetail=(state=defaultState, action)=>{
    switch (action.type){
        case actionTypes.ABSENCE_DETAIL:
            return action.id;
        default:
            return state;
    }
}

export default showDetail;