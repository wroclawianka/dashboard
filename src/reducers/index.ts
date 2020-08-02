import { combineReducers } from 'redux';

import newsReducer from './newsReducer'
import positionReducer from './positionReducer'
import weatherReducer from './weatherReducer'

export default combineReducers({
    news: newsReducer,
    weather: weatherReducer,
    position: positionReducer
})