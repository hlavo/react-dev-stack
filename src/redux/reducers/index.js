import { combineReducers } from 'redux'
import errorReducer from './errorReducer'
import FirebaseReducer from './FirebaseReducer'

const rootReducer = combineReducers({
    error: errorReducer,
    firebase:FirebaseReducer
})

export default rootReducer