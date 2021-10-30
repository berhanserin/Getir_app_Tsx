import { combineReducers, createStore } from 'redux'
import rootReducers from './reducer/rootReducers'

export const store = createStore(rootReducers)
