import {createStore, combineReducers} from 'redux'
import pageReducer from './page-reducer'

let reducers = combineReducers({
page: pageReducer
})

const store = createStore(reducers)

export default store