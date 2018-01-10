import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import AwesomeComponent from './AwesomeComponent.jsx'
import TodoListComponent from './TodoListComponent.jsx'

import css from './../../assets/styles/main.css'

class App extends Component {
  render () {
    return (
      <div>
        <p>Hello React Project</p>
        <br />
        <AwesomeComponent />
        <br />
        <TodoListComponent />
        <br />
        <BrowserRouter>
          <div>
            <Link to='/awesome-component'> Awesome Component </Link>
            <Link to='/todo'> Todo List </Link>
            <Switch>
              <Route path='/awesome-component' component={AwesomeComponent} />
              <Route path='/todo' component={TodoListComponent} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
