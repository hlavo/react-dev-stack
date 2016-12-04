import React from "react";

import Actions from "../../redux/actions/index"

import {connect} from 'react-redux'

class Home extends React.Component{

    render(){
        return(
            <div className="widget--home">
                home
            </div>
        )
    }
}

const MapStateToProps = (state) => ({

})

const MapDispatchToProps = (dispatch) => ({

})

export default connect(MapStateToProps, MapDispatchToProps)(Home)

