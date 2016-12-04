import React from "react";

import Actions from "../../redux/actions/index"

import {connect} from 'react-redux'

class Notfound extends React.Component{

    render(){
        return(
            <div className="widget--notfound">
                not
            </div>
        )
    }
}

const MapStateToProps = (state) => ({
    Notfound: state.Notfound
})

const MapDispatchToProps = (dispatch) => ({

})

export default connect(MapStateToProps, MapDispatchToProps)(Notfound)

