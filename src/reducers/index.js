import {combineReducers} from "redux";
import authReducer from "./auth";
import list  from "./list";
import filterTable from "./filterTable";
import modalReducer from "./modal";
import showDetail from "./showDetail";

const allReducers= combineReducers({
    auth: authReducer,
    list : list,
    filterAbsence: filterTable,
    toggleModal: modalReducer,
    showDetail:showDetail
})

export default allReducers;