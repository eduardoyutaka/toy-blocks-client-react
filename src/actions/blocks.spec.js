import * as ActionTypes from "../constants/actionTypes";
import * as ActionCreators from "./blocks";
import mockFetch from "cross-fetch";

jest.mock("cross-fetch");

describe("Actions", () => {
  const dispatch = jest.fn();

  afterAll(() => {
    dispatch.mockClear();
    mockFetch.mockClear();
  });

  const node = {
    url: "http://localhost:3002",
    online: false,
    name: null,
  };

  it("should fetch the blocks", async () => {
    mockFetch.mockReturnValueOnce(
      Promise.resolve({
        status: 200,
        json() {
          return Promise.resolve([
            {
              id: "5",
              type: "blocks",
              attributes: {
                index: "1",
                data: "The Human Torch",
              }
            }
          ]);
        },
      })
    );
    await ActionCreators.fetchBlock(node)(dispatch);
    const expected = [
      {
        type: ActionTypes.FETCH_BLOCKS_START,
        node,
      },
      {
        type: ActionTypes.FETCH_BLOCKS_SUCCESS,
        node,
        res: [
          {
            id: "5",
            type: "blocks",
            attributes: {
              index: "1",
              data: "The Human Torch",
            }
          }
        ],
      },
    ];

    expect(dispatch.mock.calls.flat()).toEqual(expected);
  });

  it("should fail to fetch the blocks", async () => {
    mockFetch.mockReturnValueOnce(
      Promise.resolve({
        status: 400,
      })
    );
    await ActionCreators.fetchBlock(node)(dispatch);
    const expected = [
      {
        type: ActionTypes.FETCH_BLOCKS_START,
        node,
      },
      {
        type: ActionTypes.FETCH_BLOCKS_FAILURE,
        node,
      },
    ];

    expect(dispatch.mock.calls.flat()).toEqual(expected);
  });
});
