import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import authReducer from "./../Reducer/LoginReducer";
import newsReducer from "../Reducer/NewsReducer";
import productReducer from "../Reducer/ProductsReducer";

let reducers = combineReducers({
    newsForNews:newsReducer,
    form: formReducer,
    productForThisSite:productReducer,
    authReducerStore:authReducer
    }
)

let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store=store;
export default store;