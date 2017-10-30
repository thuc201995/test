import React,{Component} from 'react';
import {Modal} from "react-bootstrap";


const defaultState={
    name: '',
    department: '',
    reason:'',
    dayOff:'',
    totalDayOff: '',
    submitted: false,
};

class AddAbsence extends Component{

    constructor(props){
        super(props);
        this.state=defaultState;
    }
    handleChange=(e)=>{
        const {name,value}= e.target;
        this.setState({[name]: value});
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({submitted: true});
        const {name,department,reason,dayOff,totalDayOff} = this.state;

            if(name && department && reason && dayOff && totalDayOff ){
            this.props.addAbsence(this.state);
            this.setState(defaultState);
            return this.props.closeModal()

        }
    }
    handleReset=(e)=>{
        e.preventDefault();
        this.setState(defaultState)
    }
    handleClose=()=>{
        return this.props.closeModal()
    }
    render(){
        const {name,department,reason,dayOff,totalDayOff,submitted} = this.state;
        return(
                <Modal show={this.props.toggleModal.showModal} onHide={this.handleClose} bsSize="large">
                    <Modal.Header closeButton>
                        <Modal.Title>Đơn xin nghỉ phép</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="form-horizontal"  onSubmit={this.handleSubmit} onReset={this.handleReset}>
                            <div className={'form-group row' + (submitted && !name ? ' is-focused has-error' : '')}>
                                <label className="col-2 col-form-label">Họ và tên</label>
                                <div className="col-10">
                                    <input type="text" className="form-control" name="name" value={name} onChange={this.handleChange} />
                                </div>
                                {submitted && !name &&
                                <div className="help-block">Bạn vui lòng nhập vào họ tên.</div>
                                }
                            </div>

                            <div className={'form-group row' + (submitted && !department ? ' is-focused has-error' : '')}>
                                <label className="col-2 col-form-label">Phòng ban</label>
                                <div className="col-10">
                                    <select className="form-control" name="department" value={department} onChange={this.handleChange}>
                                        <option value="false">Chọn phòng ban</option>
                                        <option value="Dev">Dev</option>
                                        <option value="Design">Design</option>
                                        <option value="Data">Data</option>
                                        <option value="Marketing">Marketing</option>
                                    </select>
                                </div>
                                {submitted && !department &&
                                <div className="help-block">Bạn vui lòng chọn phòng ban.</div>
                                }
                            </div>
                            <div className={'form-group row' + (submitted && !dayOff ? ' is-focused has-error' : '')}>
                                <label className="col-2 col-form-label" >Ngày nghỉ</label>
                                <div className="col-10">
                                    <input className="form-control" type="date" name="dayOff" value={dayOff} onChange={this.handleChange} />
                                </div>
                                {submitted && !dayOff &&
                                <div className="help-block">Bạn vui lòng chọn ngày bắt đầu nghỉ.</div>
                                }
                            </div>
                            <div className={'form-group row' + (submitted && !totalDayOff ? ' is-focused has-error' : '')}>
                                <label className="col-2 col-form-label">Số ngày nghỉ</label>
                                <div className="col-10">
                                    <input type="text" className="form-control" name="totalDayOff" value={totalDayOff} onChange={this.handleChange}  />
                                </div>
                                {submitted && !totalDayOff &&
                                <div className="help-block">Bạn vui lòng nhập vào số ngày nghỉ.</div>
                                }
                            </div>
                            <div className={'form-group row' + (submitted && !reason ? ' is-focused has-error' : '')}>
                                <label className="col-2 col-form-label">Lý do</label>
                                <div className="col-10">
                                    <textarea className="form-control" rows="5" value={reason} name="reason" onChange={this.handleChange}></textarea>
                                </div>
                                {submitted && !reason &&
                                <div className="help-block">Bạn vui lòng nhập vào lý do xin nghỉ.</div>
                                }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={this.handleClose}>Huỷ</button>
                                <button type="reset" value="Reset" className="btn btn-warning">Làm lại</button>
                                <button type="submit" className="btn btn-primary" >Tạo đơn</button>
                            </div>

                        </form>

                    </Modal.Body>

                </Modal>

        )
    }
}

export default AddAbsence;