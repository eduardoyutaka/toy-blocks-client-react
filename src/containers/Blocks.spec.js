import React from "react";
import { render } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import ConnectedBlocks, { Blocks } from "./Blocks";

describe("<Blcoks />", () => {
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

  it("renders the blocks data", () => {
    const { getByText } = render(<Blocks actions={actions} blocks={blocks} />);
    const data = getByText(/The Human Torch/i);

    expect(data).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const middlewares = [thunk];
    const store = configureMockStore(middlewares)({blocks});
    const { container } = render(
      <Provider store={store}>
        <ConnectedBlocks />
      </Provider>
    )
    expect(container.firstChild).toMatchSnapshot();
  });
});
