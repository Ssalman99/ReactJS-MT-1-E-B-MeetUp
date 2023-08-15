import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import Meetup from './context/Meetup'

import Home from './components/Home'

import Register from './components/Register'

import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {
    registered: false,
    name: '',
    topic: 'ARTS_AND_CULTURE',
    error: false,
  }

  updateName = updateName => {
    this.setState({name: updateName})
  }

  updateTopic = updateTopic => {
    this.setState({topic: updateTopic})
  }

  changeRegistrationStatus = () => {
    this.setState({registered: true})
  }

  updateError = response => {
    this.setState({error: response})
  }

  render() {
    const {registered, name, topic, error} = this.state
    return (
      <Meetup.Provider
        value={{
          registered,
          name,
          topic,
          error,
          updateName: this.updateName,
          updateTopic: this.updateTopic,
          changeRegistrationStatus: this.changeRegistrationStatus,
          updateError: this.updateError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </Meetup.Provider>
    )
  }
}

export default App
