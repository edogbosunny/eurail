import axios from 'axios';
import { CONTACT_FAILURE, CONTACT_PROCESSING, CONTACT_SUCCESS } from '../../types';

const fetchContactProcessing = () => ({
  type: CONTACT_PROCESSING,
});

const fetchContaactSuccess = (payload) => ({
  type: CONTACT_SUCCESS,
  payload,
});

const fetchContactFailure = (error) => ({
  type: CONTACT_FAILURE,
  error,
});

const obj = {};

/**
 * fetch contacts function!
 * This function connects to a third party 
 * api retrieving all necessary contacts
 */

export const fetchContacts = () => async (dispatch) => {
  try {
    dispatch(fetchContactProcessing());
    const request = await axios.get('https://randomuser.me/api/?results=50');

    request?.data?.results.forEach(item => {
      const firstLetter = item?.name?.first?.charAt(0).toLowerCase();
      if (firstLetter) {
        if (!obj[firstLetter]) {
          obj[firstLetter] = [item];
        } else {
          obj[firstLetter].push(item);
        }
      }
    })
    return dispatch(fetchContaactSuccess(obj));
  } catch (error) {
    return dispatch(fetchContactFailure(error));
  }
};
