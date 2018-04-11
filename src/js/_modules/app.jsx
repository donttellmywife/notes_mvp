import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './redux/store'
import { Landing, Search, Notebook, PAGE404, Note } from '../pages'

import mock from '../mock.json'


const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={(props) => <Search {...props} items={mock.notes} />} />
        <Route exact path="/books" component={Notebook} />
        <Route path="/notes/:id" component={Note} />
        {/* <Route exact path="/asd" component={Woot} /> comment example */}
        <Route component={PAGE404} />
      </Switch>
    </Provider>
  </BrowserRouter>
)

export default App
