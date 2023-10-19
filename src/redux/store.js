import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { authReducer } from "./authData/authReducer"
import thunk from "redux-thunk"



const root = combineReducers({
    authData:authReducer,
    data:""
})
export const store=legacy_createStore(root,applyMiddleware(thunk))



