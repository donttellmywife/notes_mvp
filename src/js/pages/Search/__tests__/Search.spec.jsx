import React from 'react'
import Enzyme, { shallow }  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import Search, { Unwrapped as UnwrappedSearch } from '../Search'
import NoteTab from '../../Notebook/NoteTab'

import mock from './mock.json'


describe('Search page: ', () => {

  it('Search renders correctrly', () => {
    const component = shallow(<UnwrappedSearch items={mock.notes} searchTerm="" />)
    expect(component).toMatchSnapshot()
  })


  it('Search should render correct amount of notes', () => {
    const component = shallow(<UnwrappedSearch items={mock.notes} searchTerm="" />)
    expect(component.find(NoteTab).length).toEqual(mock.notes.length)
  })


  it('Search should render correct amount of notes based on search input', () => {
    const search = 'leading'
    const component = shallow(<UnwrappedSearch items={mock.notes} searchTerm={search} />)
    const noteCount = mock.notes
      .filter((note) => `${note.name} ${note.text}`.toUpperCase()
        .indexOf(search.toUpperCase()) >= 0
      ).length

    expect(component.find(NoteTab).length).toEqual(noteCount)
  })
})
