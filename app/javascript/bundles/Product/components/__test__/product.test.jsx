import React from 'react';
import { shallow } from 'enzyme';

import Product from '../Product';

describe('Product Component', () => {
  it('renderd', () => {
    const params = {
      name: 'testTitle',
      match: {
        params: { id: 1, },
      },
    };

    const wrapper = shallow(<Product {...params} />);
    expect(wrapper.state().name).toEqual('testTitle');
  });
});
