import * as ActionTypes from '../constants/actionTypes';
import reducer from './blocks';
import { blocksInitialState } from './initialState';


describe('Reducers::Blocks', () => {
  const getInitialState = () => {
    return blocksInitialState();
  };

  const nodeA = {
    url: 'http://localhost:3002',
    online: false,
    name: null,
    blocks: {
      loading: false,
      list: []
    }
  };

  const nodeB = {
    url: 'http://localhost:3003',
    online: false,
    name: null,
    blocks: {
      loading: false,
      list: []
    }
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle FETCH_BLOCKS_START', () => {
    const blocksState = {
      list: [],
      loading: false,
    };
    const action = { type: ActionTypes.FETCH_BLOCKS_START, node: nodeA };
    const expected = {
      list: [],
      loading: true,
    };

    expect(reducer(blocksState, action)).toEqual(expected);
  });

  it('should handle FETCH_BLOCKS_SUCCESS', () => {
    const blocksState = {
      list: [],
      loading: true,
    };
    const action = {
      type: ActionTypes.FETCH_BLOCKS_SUCCESS, node: nodeA, res: {
        data: [
          {
            id: "5",
            type: "blocks",
            attributes: {
              index: "1",
              data: "The Human Torch",
            }
          }
        ]
      }
    };
    const expected = {
      loading: false,
      list: [
        {
          id: "5",
          data: "The Human Torch",
        }
      ]
    };

    expect(reducer(blocksState, action)).toEqual(expected);
  });

  it('should handle FETCH_BLOCKS_FAILURE', () => {
    const blocksState = {
      list: [],
      loading: true,
    };
    const action = { type: ActionTypes.FETCH_BLOCKS_FAILURE, node: nodeA };
    const expected = {
      list: [],
      loading: false,
    };

    expect(reducer(blocksState, action)).toEqual(expected);
  });
});
