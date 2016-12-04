export default function Reducer(<%= name %> = {},action){
    switch (action.type){
        case  <%= name %> : return action
        default : return <%= name %>
    }
}