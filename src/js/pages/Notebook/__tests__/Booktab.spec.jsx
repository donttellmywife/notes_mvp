import React from 'react'
import Enzyme, { shallow }  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import BookTab, { Unwrapped } from '../BookTab'

import books from '../../../../__mocks__/books.js'


describe('Booktab component: ', () => {
  const book = books[0]

  it('Booktab renders correctrly', () => {
    const component = shallow(<Unwrapped {...book} />)
    expect(component).toMatchSnapshot()
  })
})
