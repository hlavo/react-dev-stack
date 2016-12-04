export default function errorReducer(error = {},action){
    switch (action.type){
        case  "ERROR" : return action
        default : return error
    }
}