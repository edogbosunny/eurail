import { CONTACT_FAILURE, CONTACT_SUCCESS, CONTACT_PROCESSING } from '../types';

const initialState = {
  loading: false,
  contacts: {}
};

export default (state = initialState, action) => {
  console.log('00099', action)
  switch (action.type) {

    case CONTACT_PROCESSING:
      return {
        ...state,
        contacts: action.payload,
       loading: true,
      };
    case CONTACT_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
    case CONTACT_FAILURE:
      return {
        ...state,
        orderHistory: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};