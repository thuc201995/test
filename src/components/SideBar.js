import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component{
    handleClick=()=>{
        this.props.showModal();
    }
    handleLogout=()=>{
        this.props.logout();
    }
    render(){
        return(
            <div className="sidebar" data-color="orange" data-image="img/sidebar-1.jpg">
                <img src="/assets/img/sidebar-1.jpg" alt=""/>
                <div className="logo">
                    <a href="http://www.creative-tim.com" className="simple-text">
                        Quản lý nghỉ phép
                    </a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="active">
                            <Link to="/">
                                <i className="material-icons">dashboard</i>
                                <p>Trang quản lý</p>
                            </Link>
                        </li>

                        <li>
                            <Link to="/">
                                <i className="material-icons">content_paste</i>
                                <p>Danh sách</p>
                            </Link>
                        </li>
                        <li>
                            <a onClick={this.handleClick} >
                                <i className="material-icons">library_books</i>
                                <p>Tạo đơn</p>
                            </a>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="material-icons text-gray">notifications</i>
                                <p>Thông báo</p>
                            </Link>
                        </li>
                        <li>
                            <a onClick={this.handleLogout}>
                                <i className="material-icons">power_settings_new</i>
                                <p>Đăng xuất</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default SideBar;