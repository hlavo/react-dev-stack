export default {
    <%= name %>(){
        return (dispatch)=> {

            let self = this

            dispatch(self.initSuccess<%= name %>())
        }
    },
    initSuccess<%= name %>(<%= name %>){
        return {
            type: "INIT_SUCCESS_"<%= name %>,
            <%= name %>
        }
    }
}