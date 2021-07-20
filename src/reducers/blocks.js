import {FETCH_BLOCKS_START, FETCH_BLOCKS_SUCCESS, FETCH_BLOCKS_FAILURE} from '../constants/actionTypes';
import { blocksInitialState } from './initialState';

export default function blocksReducer(state = blocksInitialState(), action) {
  switch (action.type) {
    case FETCH_BLOCKS_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_BLOCKS_SUCCESS:
      return {
        ...state,
        list: action.res.data.map(item => ({
          id: item.id,
          data: item.attributes.data
        })),
        loading: false
      };
    case FETCH_BLOCKS_FAILURE:
      return {
        ...state,
        loading: false
      };
    default:
      return {
        ...state
      };
  }
}
