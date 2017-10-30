import * as actionTypes from "../constants/actionTypes";

let defaultState="ANOMINOUS";
let authReducer=(state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.SET_ADMIN:
            return action.role;
        case actionTypes.SET_USER:
            return action.role;
        case actionTypes.LOGOUT:
            return action.role;
        default:
            return state;
    }
}

export default authReducer;