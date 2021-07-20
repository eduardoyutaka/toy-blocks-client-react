import React from "react";
import { render } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import ConnectedBlocks, { Blocks } from "./Blocks";

describe("<Blocks />", () => {
  const actions = {
    fetchBlocks: jest.fn()
  };

  const blocks = {
    list: [
      {
        id: '5',
        data: 'The Human Torch'
      }
    ]
  };

  const nodeA = {
    url: 'https://thawing-springs-53971.herokuapp.com',
    online: false,
    name: 'Node 1',
    loading: false,
    blocks: {
      loading: false,
      list: []
    }
  }

  const nodeB = {
    url: 'https://secret-lowlands-62331.herokuapp.com',
    online: false,
    name: 'Node 2',
    loading: false,
    blocks: {
      loading: false,
      list: []
    }
  }

  const nodes = {
    list: [nodeA, nodeB]
  };

  it("renders the blocks data", () => {
    const { getByText } = render(<Blocks actions={actions} blocks={blocks} />);
    const data = getByText(/The Human Torch/i);

    expect(data).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const middlewares = [thunk];
    const store = configureMockStore(middlewares)({nodes});
    const { container } = render(
      <Provider store={store}>
        <ConnectedBlocks node={nodeA} />
      </Provider>
    )
    expect(container.firstChild).toMatchSnapshot();
  });
});
