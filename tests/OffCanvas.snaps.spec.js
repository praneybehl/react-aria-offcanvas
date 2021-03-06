import React from 'react';
import renderer from 'react-test-renderer';
import OffCanvas from 'react-aria-offcanvas';

describe('OffCanvas', () => {
  it('renders correctly when open', () => {
    const tree = renderer.create(<OffCanvas isOpen={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when closed', () => {
    const tree = renderer.create(<OffCanvas />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
