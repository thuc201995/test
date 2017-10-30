import * as actionTypes from "../constants/actionTypes";

let defaultState={
    filterName:'',
    filterDepartment:0,
    filterStatus: 0
}
let filterTable=(state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.FILTER_TABLE:
            return action.filter;
        default:
            return state;
    }
}

export default filterTable;