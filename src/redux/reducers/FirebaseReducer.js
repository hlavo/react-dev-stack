export default function postReducer(firebase= {},action){
    switch (action.type){
        case  "INIT_SUCCESS_FIREBASE" : return action.firebase
        default : return firebase
    }
}