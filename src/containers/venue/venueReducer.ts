import { FETCH_AMENITIES, FETCH_AMENITIES_SUCCESS, FETCH_AMENITIES_FAILIURE } from './constants';

const initialState = {
    errorMessage: '',
    amenities: []
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
  case FETCH_AMENITIES:
    return Object.assign({}, state, {
    })
  case FETCH_AMENITIES_SUCCESS:
    return Object.assign({}, state, {
        amenities: action.res.data[0].amenities
    })
  case FETCH_AMENITIES_FAILIURE:
    return Object.assign({}, state, {
        errorMessage: action.err
    })
  default:
    return state;
  }
};
export default reducer;