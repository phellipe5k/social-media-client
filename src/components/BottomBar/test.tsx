import { render, screen } from '@testing-library/react';

import BottomBar from '.';

describe('<BottomBar />', () => {
  const { container } = render(<BottomBar />);

  it('should title be the component name', () => {
    expect(screen.getByRole('heading', { name: /BottomBar/i }));
  });

  it('should snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
