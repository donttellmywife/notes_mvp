import React from 'react'
import Enzyme, { shallow }  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import Notebook from '../Notebook'
import BookTab from '../BookTab'

import books from '../../../../__mocks__/books.js'


describe('Notebook page: ', () => {
  it('Notebook renders correctrly', () => {
    const component = shallow(<Notebook />).dive()
    expect(component).toMatchSnapshot()
  })
})
