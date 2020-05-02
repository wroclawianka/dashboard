import{combineReducers} from 'redux';

import positionReducer from './positionReducer'
import weatherReducer from './weatherReducer'

export default combineReducers({
    weather: weatherReducer,
    position: positionReducer
})