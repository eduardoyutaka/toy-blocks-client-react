import { render } from '@testing-library/react';
import Block from './Block';

describe('<Block />', () => {
  it('renders the id of the block', () => {
    const block = {
      id: '001',
      data: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
    }
    const { getByText } = render(<Block block={block} />);
    const id = getByText(/001/i);
    expect(id).toBeInTheDocument();
  });

  it('renders the data of the block', () => {
    const block = {
      id: '001',
      data: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
    }
    const { getByText } = render(<Block block={block} />);
    const data = getByText(/Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit./i);
    expect(data).toBeInTheDocument();
  });
});
