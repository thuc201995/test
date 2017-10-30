import React,{Component} from 'react';
import {Modal} from "react-bootstrap";

let defaultState={
    approval: "",
    comment:"",
    submitted:false
}
class ShowDetail extends Component{

    constructor(props){
        super(props);
        this.state=defaultState;
    }

    handleClose=()=>{
        this.props.closeDetail();
    }

    handleChange=(e)=>{
        const {name,value}= e.target;
        this.setState({[name]: value});
    }

    handleUpdate=(e)=>{
        e.preventDefault();
        const {approval,comment} = this.state;
        this.setState({submitted: true});
        let payload ={
            id:this.props.detail,
            comment:comment,
            approval:approval
        }
        if(approval && comment){
            this.props.updateStatus(payload);
            this.setState(defaultState);
            this.props.closeDetail();
        }
    }
    handleReset=(e)=>{
        e.preventDefault();
        this.setState(defaultState)
    }
    handleForm(){
        const {approval,comment,submitted} = this.state;
           return(
               <div className="col-lg-9 col-md-offset-1">
                   <br/>
                   <h5><strong className="text-rose">Xét duyệt</strong></h5>
                   <form onSubmit={this.handleUpdate}>
                       <div className={'form-group row' + (submitted && !approval ? ' is-focused has-error' : '')} >
                           <div className="col-10">
                               <select className="form-control" name="approval" value={approval} onChange={this.handleChange}>

                                   <option value="">Chọn trạng thái</option>
                                   <option value="approved">Duyệt</option>
                                   <option value="refuse">Không duyệt</option>
                               </select>
                           </div>
                           {submitted && !approval &&
                           <div className="help-block">Bạn vui lòng chọn một trong hai trạng thái.</div>
                           }
                       </div>
                       <div className={'form-group row' + (submitted && !comment ? ' is-focused has-error' : '')}>
                           <label className="col-2 col-form-label">Ghi chú</label>
                           <div className="col-10">
                               <textarea className="form-control" rows="5" name="comment" value={comment} onChange={this.handleChange}></textarea>
                           </div>
                           {submitted && !comment &&
                           <div className="help-block">Bạn vui lòng nhập vào ghi chú.</div>
                           }
                       </div>
                       <div className="modal-footer">
                           <button type="button" className="btn btn-secondary" onClick={this.handleClose}>Huỷ</button>
                           <button type="reset" value="Reset" className="btn btn-warning" onClick={this.handleReset}>Làm lại</button>
                           <button type="submit" className="btn btn-primary"  >Xác nhận</button>
                       </div>
                   </form>
               </div>
           )


    }

    setDetail=()=>{
       let listItems=this.props.list;
       let id=this.props.detail;
       let item= listItems.filter((listItem)=>{
           return listItem.id===parseInt(id);
       })
        let content=item.map(
            (eachItem)=>{
                return(
                    <div className="content_detail" key={eachItem.id}>
                        <div className="row">
                            <div className="col-lg-3 col-md-offset-1">
                                <h6><strong>Họ và tên:</strong></h6>
                            </div>
                            <div className="col-lg-7">
                                <h6>{eachItem.name}</h6>
                            </div>

                            <div className="col-lg-3 col-md-offset-1">
                                <h6><strong>Phòng ban:</strong></h6>
                            </div>
                            <div className="col-lg-7">
                                <h6>{eachItem.department}</h6>
                            </div>

                            <div className="col-lg-3 col-md-offset-1">
                                <h6><strong>Ngày bắt đầu nghỉ:</strong></h6>
                            </div>
                            <div className="col-lg-7">
                                <h6>{eachItem.dayOff}</h6>
                            </div>

                            <div className="col-lg-3 col-md-offset-1">
                                <h6><strong>Số ngày nghỉ:</strong></h6>
                            </div>
                            <div className="col-lg-7">
                                <h6>{eachItem.totalDayOff}</h6>
                            </div>


                            <div className="col-lg-3 col-md-offset-1">
                                <h6><strong>Lý do:</strong></h6>
                            </div>
                            <div className="col-lg-7">
                                <h6>{eachItem.reason}</h6>
                            </div>


                            <div className="col-lg-3 col-md-offset-1">
                                <h6><strong>Trạng thái:</strong></h6>
                            </div>
                            <div className="col-lg-7">
                                <h6>{((eachItem.approval==="refuse") ? "Không duyệt":(eachItem.approval==="approved") ? "Đã duyệt":"Chưa duyệt" )}</h6>
                            </div>

                            <div className="col-lg-3 col-md-offset-1">
                                {((eachItem.approval==="unapproved") ? "" : <h6><strong>Thông tin xác nhận:</strong></h6> )}
                            </div>
                            <div className="col-lg-7">
                                {((eachItem.approval==="unapproved") ? "" : <h6>{eachItem.comment}</h6> )}
                            </div>
                                {((eachItem.approval==="unapproved" && this.props.auth==="ROLE_ADMIN") ? this.handleForm(): "")}

                        </div>
                    </div>
                )
            }
        )

        return content;

    }


    render(){
        return(
            <Modal show={this.props.toggleModal.showModalDetail} onHide={this.handleClose} bsSize="large">
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="card">
                        <div className="card-header" data-background-color="orange">
                            <h4 className="title">Đơn xin nghỉ phép</h4>
                        </div>
                    </div>
                    {this.setDetail()}

                </Modal.Body>

            </Modal>
        )
    }
}

export default ShowDetail;


