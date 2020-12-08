
import React from 'react';
import { shallow } from 'enzyme';
import * as redux from 'react-redux'

import Contact from '../component/contacts'


const spy = jest.spyOn(redux, 'useSelector')
spy.mockReturnValue({});
describe('Login page', () => {
  const wrapper = shallow(
    <Contact />,
  );
  it('contacts snap shot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});


