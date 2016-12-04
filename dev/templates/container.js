import React from "react";

import Actions from "../../redux/actions/index"

import {connect} from 'react-redux'

class <%= name %> extends React.Component{

    render(){
        return(
            <div className="widget--<%= _.lowerCase(name) %>">
            </div>
        )
    }
}

const MapStateToProps = (state) => ({
    <%= name %>: state.<%= name %>
})

const MapDispatchToProps = (dispatch) => ({

})

export default connect(MapStateToProps, MapDispatchToProps)(<%= name %>)

