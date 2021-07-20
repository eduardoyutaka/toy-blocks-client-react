import { render } from '@testing-library/react';
import Block from './Block';

describe('<Block />', () => {
  it('renders the id of the block', () => {
    const block = {
      id: '001',
      text: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
    }
    const { getByText } = render(<Block block={block} />);
    const id = getByText(/001/i);
    expect(id).toBeInTheDocument();
  });

  it('renders the text of the block', () => {
    const block = {
      id: '001',
      text: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
    }
    const { getByText } = render(<Block block={block} />);
    const text = getByText(/Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit./i);
    expect(text).toBeInTheDocument();
  });
});
