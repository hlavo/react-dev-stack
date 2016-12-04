import React from "react"
import {Link} from "react-router"
import {connect} from 'react-redux'
import Actions from "../redux/actions/index"

const Layout = class Layout extends React.Component{

    constructor(props){
        super(props)
    }

    render(){

        return(
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}

const MapStateToProps = (state) => ({

})


const MapDispatchToProps = (dispatch) => ({

})

export default connect(MapStateToProps, MapDispatchToProps)(Layout)