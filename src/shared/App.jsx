import React, { Component } from 'react'

import Hello from './Hello'
import Counter from './Counter'
import Navbar from './Navbar'
import NoMatch from './NoMatch'

import routes from './routes'
import { Route, Switch } from 'react-router-dom'

const App = (props) => (
  <React.Fragment>
    <div>Hello World!</div>
    <Hello />
    <Counter />

    <Navbar />

    <Switch>
      {routes.map(({ path, exact, component: C, ...rest }) => (
        <Route
          key={path}
          path={path}
          exact={exact}
          render={(props) => (
            <C {...props} {...rest} />
          )}
        />
      ))}
      <Route render={(props) => <NoMatch {...props} />} />
    </Switch>
  </React.Fragment>
)

export default App