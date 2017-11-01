import * as actionTypes from "../constants/actionTypes";

export const setAdmin=()=>{
    return{
        type: actionTypes.SET_ADMIN,
        role: "ROLE_ADMIN"
    }
}

export const setUser=()=>{
    return{
        type: actionTypes.SET_USER,
        role: "ROLE_USER"
    }
}

export const logout=()=>{
    return{
        type: actionTypes.LOGOUT,
        role: "ANOMINOUS"
    }
}

let nextAbsence = 5;

export const addAbsence=(payload)=>{

    return{
        type: actionTypes.ADD_NEW,
        id:nextAbsence++,
        payload
    }
}


export const filterTable=(filter)=>{
    return {
        type: actionTypes.FILTER_TABLE,
        filter: filter
    }
}


export const showModal=()=>{
    return {
        type: actionTypes.SHOW_MODAL_ADD_NEW
    }
}


export const closeModal=()=>{
    return {
        type: actionTypes.CLOSE_MODAL_ADD_NEW
    }
}

export const showDetail=()=>{
    return{
        type: actionTypes.SHOW_MODAL_DETAIL,
    }
}

export const closeDetail=()=>{
    return{
        type: actionTypes.CLOSE_MODAL_DETAIL,

    }
}

export const AbsenceDetail=(id)=>{
    return{
        type: actionTypes.ABSENCE_DETAIL,
        id
    }
}

export const updateStatus=(payload)=>{
    return {
        type:actionTypes.UPDATE_STATUS,
        payload
    }
}
