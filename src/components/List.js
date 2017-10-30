import React,{Component} from 'react';

const defaultState={
    filterName:'',
    filterDepartment:0,
    filterStatus: 0
}
class ListAbsence extends Component{

    constructor(props){
        super(props);
        this.state=defaultState;
    }

    handleChange=(e)=>{
        const {name,value}= e.target;
        this.setState({[name]: value});
        let filter={
            filterName: name==='filterName' ? value : this.state.filterName,
            filterDepartment: name==='filterDepartment' ? value : this.state.filterDepartment,
            filterStatus: name==='filterStatus' ? value : this.state.filterStatus,
        }

        this.props.filterTable(filter);


    }
    handleClick=(event)=>{
        this.props.showDetail();
        this.props.AbsenceDetail(event.target.dataset["item"]);

    }


    bodauTiengViet(str) {
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        return str;
    }

    filterTable(listItems, filter){
        if(filter)
        {
            if(filter.filterName){
                listItems= listItems.filter((listItem)=>{
                    return this.bodauTiengViet(listItem.name).indexOf(this.bodauTiengViet(filter.filterName)) !==-1;
                })
            }
            if(filter.filterDepartment){
                if(filter.filterDepartment==="0")
                    listItems;
                else{
                    listItems=listItems.filter((listItem)=>{
                        return listItem.department===filter.filterDepartment;
                    })
                }

            }

            if(filter.filterStatus){
                if(filter.filterStatus==="0")
                    listItems;
                else{
                    listItems=listItems.filter((listItem)=>{
                        return listItem.approval===filter.filterStatus;
                    })
                }

            }
        }
        return listItems;
    }
    createListAbsenceItem(){
        let listItems=this.props.list;
        let filter=this.props.filterAbsence;
        listItems=this.filterTable(listItems,filter);

        let listItem= listItems.map(
            (eachItem)=>{
                return(
                <tr key={eachItem.id}>
                    <th scope="row">{eachItem.id}</th>
                    <td>{eachItem.name}</td>
                    <td>{eachItem.department}</td>
                    <td>{eachItem.reason}</td>
                    <td>{eachItem.dayOff}</td>

                    <td
                        className={'text-xl-center ' + ((eachItem.approval==="refuse") ? "text-gray":(eachItem.approval==="approved") ? "text-primary":"text-danger" )}
                    ><strong>{((eachItem.approval==="refuse") ? "Không duyệt":(eachItem.approval==="approved") ? "Đã duyệt":"Chưa duyệt" )}</strong></td>
                    <td>
                        {((eachItem.approval==="unapproved" && this.props.auth==="ROLE_ADMIN") ?"": <button data-item={eachItem.id} className="btn btn-primary" onClick={this.handleClick}>Xem chi tiết</button>)}
                        {((eachItem.approval==="unapproved" && this.props.auth==="ROLE_ADMIN") ? <button data-item={eachItem.id} className="btn btn-warning" onClick={this.handleClick}>Xác nhận</button>:"")}

                    </td>
                </tr>
                )
            }
        )
        return listItem;
    }
    render(){
        const {filterName,filterDepartment,filterStatus}= this.state;
        return(
            <table className="table table-bordered " >
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Tên nhân viên</th>
                <th scope="col">Phòng ban</th>
                <th scope="col">Lý do nghỉ phép</th>
                <th scope="col">Ngày nghỉ phép</th>
                <th scope="col">Trạng thái</th>
                <th scope="col"></th>

            </tr>
            </thead>
                <tbody>
                <tr>
                    <th scope="row"></th>
                    <td><input type="text" name="filterName" value={filterName} onChange={this.handleChange} className="form-control" placeholder="Tìm theo tên nhân viên" /></td>
                        <td>
                            <select name="filterDepartment" value={filterDepartment} onChange={this.handleChange} className="form-control">
                                <option value="0">Tất cả</option>
                                <option value="Dev">Dev</option>
                                <option value="Design">Design</option>
                                <option value="Data">Data</option>
                                <option value="Marketing">Marketing</option>
                            </select>
                        </td>
                        <td></td>
                        <td></td>

                        <td>
                        <select name="filterStatus"  className="form-control" value={filterStatus} onChange={this.handleChange}>
                        <option value="0">Tất cả</option>
                        <option value="approved">Đã duyệt</option>
                        <option value="unapproved">Chưa duyệt</option>
                        <option value="refuse">Không duyệt</option>

                        </select>
                    </td>
                    <td></td>
                </tr>
                {this.createListAbsenceItem()}

                </tbody>
            </table>

        );
    }
}

export default ListAbsence;
