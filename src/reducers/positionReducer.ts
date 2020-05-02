import { GET_POSITION } from "../actions/types";

export default (state = null, action) => {
    switch (action.type) {
        case GET_POSITION:
            const position = (action.payload.coords) ? getCoords(action.payload.coords) : null;
            return { ...position };
        default:
            return state;
    }
};

// helpers
function getCoords(data) {
    return {
        lat: data.latitude,
        lon: data.longitude
    }
}