import React from "react";

import Actions from "../../redux/actions/index"

import {connect} from 'react-redux'

class Home extends React.Component{

    render(){
        return(
            <div className="widget--home">
                home 2
            </div>
        )
    }
}

const MapStateToProps = (state) => ({
    Home: state.Home
})

const MapDispatchToProps = (dispatch) => ({

})

export default connect(MapStateToProps, MapDispatchToProps)(Home)

