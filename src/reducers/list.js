import * as actionTypes from "../constants/actionTypes";
let defaultState=[
    {
        id: 1,
        name: "Nguyễn Văn Tèo",
        department: "Dev",
        reason: "Nghỉ bệnh",
        dayOff: "24/10/2017",
        totalDayOff: "3",
        approval: "approved",
        comment:"Đồng ý cho nguyễn Văn Tèo nghỉ 3 ngày"
    },
    {
        id: 2,
        name: "Trần Văn Tý",
        department: "Marketing",
        reason: "Nghỉ bệnh",
        dayOff: "24/10/2017",
        totalDayOff: "4",
        approval: "unapproved",
        comment:"",
    },
    {
        id: 3,
        name: "Nguyễn Thị Tủn",
        department: "Data",
        reason: "Nghỉ bệnh",
        dayOff: "24/10/2017",
        totalDayOff: "4",
        approval: "refuse",
        comment:"Không đồng ý"

    },
    {
        id: 4,
        name: "Nguyễn Hoàng Duy",
        department: "Dev",
        reason: "Nghỉ bệnh",
        dayOff: "24/10/2017",
        totalDayOff: "3",
        approval: "refuse",
        comment:"Không đồng ý"

    }



];

let list=(state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.ADD_NEW:
            return[
                ...state,{
                    id: action.id,
                    name: action.payload.name,
                    department: action.payload.department,
                    reason: action.payload.reason,
                    dayOff: action.payload.dayOff,
                    totalDayOff: action.payload.totalDayOff,
                    approval: "unapproved",
                    comment:""
                }
            ];
        case actionTypes.UPDATE_STATUS:
            return Object.assign([], state,
                 state.map((item, index) => {
                    if (index === (action.payload.id-1)) {
                        return Object.assign({}, item, {
                            approval:  action.payload.approval,
                            comment: action.payload.comment
                        })


                    }

                    return item
                })
            )

        default:
            return state;
    }
}

export default list ;