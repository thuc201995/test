import React,{Component} from 'react';

class Nav extends Component{
    handleLogout=()=>{
        this.props.logout()
    }
    render(){

        return(
            <nav className="navbar navbar-transparent navbar-absolute">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="material-icons">dashboard</i>
                                    <p className="hidden-lg hidden-md">Dashboard</p>
                                </a>
                            </li>
                            <li className="dropdown">
                                <a  className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="material-icons">notifications</i>
                                    <span className="notification">5</span>
                                    <p className="hidden-lg hidden-md">Notifications</p>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a >Hình ảnh chỉ mang tính chất minh hoạ</a>
                                    </li>

                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="material-icons">person</i>
                                    <p className="hidden-lg hidden-md">Profile</p>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>{
                                        this.props.auth==='ROLE_USER' ? <a >User</a>: this.props.auth==='ROLE_ADMIN' ? <a >Admin</a>:<a >Anonymous</a>
                                    }
                                    </li>
                                    <li>
                                        <a onClick={this.handleLogout}>Đăng Xuất</a>
                                    </li>

                                </ul>
                            </li>
                        </ul>
                        <form className="navbar-form navbar-right" onSubmit={(e)=>{e.preventDefault()}}>

                            <div className="form-group  is-empty">
                                <input type="text" className="form-control" placeholder="Search" name="keyword"/>
                                <span className="material-input"></span>
                            </div>
                            <button className="btn btn-white btn-round btn-just-icon">
                                <i className="material-icons">search</i>
                                <div className="ripple-container"></div>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;