import postingReducer from './postings'
import userReducer from './users'
import {combineReducers} from 'redux'


export default combineReducers({
    postingReducer,userReducer
})



