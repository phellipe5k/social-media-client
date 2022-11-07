import { render, screen } from '@testing-library/react';

import FirstStepModal from '.';

describe('<FirstStepModal />', () => {
  const { container } = render(<FirstStepModal />);

  it('should title be the component name', () => {
    expect(screen.getByRole('heading', { name: /FirstStepModal/i }));
  });

  it('should snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
