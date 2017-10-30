import React,{Component} from 'react';
import SidebarContainer from "../container/SideBarContainer";
import Redirect from "react-router-dom/es/Redirect";
import ListContainer from "../container/ListContainer";
import AddContainer from "../container/AddContainer";
import ShowDetailContainer from "../container/ShowDetailContainer";
import NavContainer from "../container/NavContainer";

class Main extends Component{
    render(){
        if(this.props.auth==="ANOMINOUS")
            return <Redirect to="/login"/>
        return(
            <div className="App">
                <div className="wrapper">
                    <SidebarContainer/>
                    <div className="main-panel">

                        <NavContainer/>

                        <div className="content">
                            <div className="container-fluid">
                                <ListContainer/>
                            </div>
                        </div>


                        <AddContainer/>
                        <ShowDetailContainer/>
                    </div>

                </div>
            </div>

        )
    }
}


export default Main;