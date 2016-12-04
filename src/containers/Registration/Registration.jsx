import React from "react";

import Actions from "../../redux/actions/index"

import {connect} from 'react-redux'

class Registration extends React.Component{

    render(){
        return(
            <div className="widget--registration">
                REG
            </div>
        )
    }
}

const MapStateToProps = (state) => ({
    Registration: state.Registration
})

const MapDispatchToProps = (dispatch) => ({

})

export default connect(MapStateToProps, MapDispatchToProps)(Registration)

