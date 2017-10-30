import * as actionTypes from "../constants/actionTypes";

let defaultState={
    showModal: false,
    showModalDetail:false
}
let modalReducer=(state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.SHOW_MODAL_ADD_NEW:
            return {...state,
                showModal:true
            }

        case actionTypes.CLOSE_MODAL_ADD_NEW:
            return{...state,
                showModal:false
            }

        case actionTypes.SHOW_MODAL_DETAIL:
            return{...state,
                showModalDetail:true
            }
        case actionTypes.CLOSE_MODAL_DETAIL:
            return{...state,
                showModalDetail:false
            }
        default:
            return state;
    }
}

export default modalReducer;