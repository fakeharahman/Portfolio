import React, { Component } from "react"
// import Aux from "../Auxillary/Auxillary"
// import classes from "./Layout.module.css"
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar"
// import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer"

class Layout extends Component {

    state = {
        showSideDrawer: false,
        showNavBar: false
    }

    // sideDrawerShowHandler = () => {
    //     this.setState({ showSideDrawer: true })
    // }

    // sideDrawerHideHandler = () => {
    //     this.setState((prevState) => { return { showSideDrawer: !prevState.showSideDrawer } })
    // }

    render() {
        return (
            <React.Fragment>
                <Toolbar />
                {/* drawerOpen={this.sideDrawerShowHandler} */}
                {/* <SideDrawer closed={this.sideDrawerHideHandler} show={this.state.showSideDrawer} /> */}
                <main>
                    {this.props.children}</main>
            </React.Fragment>

        )
    }
}


export default Layout 