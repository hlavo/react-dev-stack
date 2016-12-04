import React from "react"
import ReactDOM from "react-dom"

const <%= name %> = (props) => {
    return (
        <div className="component--<%= _.lowerCase(name) %>"><%= name %></div>
    );
}