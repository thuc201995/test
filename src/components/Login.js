import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false,
            redirect: false,
            errors: false
        };


    }

    handleChange=(e) =>{
        const { name, value } = e.target;
        this.setState({ [name]: value });
        this.setState({errors:false});
    }

    handleSubmit=(e)=> {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username ==="user" && password==="12345") {
            this.props.setUser();
            this.setState({redirect:true});
        }
        else if (username ==="admin" && password==="12345") {
            this.props.setAdmin();
            this.setState({redirect:true});
        }
        else this.setState({errors:true})
    }

    render() {
        const { username, password, submitted, errors } = this.state;
        if(this.state.redirect===true)
            return <Redirect to="/"/>
        return (
        <div className="container " >
            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 form-login">
                <div className="panel panel-default">
                    <div className="panel-heading"><b>Đăng nhập</b> </div>
                    <div className="panel-body">
                        <div >
                            {submitted && errors &&
                            <div className="help-block text-danger">Username hoặc password không trùng khớp .</div>
                            }
                            <form name="form" onSubmit={this.handleSubmit }>
                                <div className={'form-group' + (submitted && !username ? ' is-focused has-error' : '')}>
                                    <label htmlFor="username">Tên đăng nhập</label>
                                    <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange}/>
                                    {submitted && !username &&
                                    <div className="help-block">Tên đăng nhập không được bỏ trống.</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !password ? ' is-focused has-error' : '')}>
                                    <label htmlFor="password">Mật khẩu</label>
                                    <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                                    {submitted && !password &&
                                    <div className="help-block">Bạn chưa nhập mật khẩu.</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-behance" type="submit">Đăng nhập</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default LoginPage;