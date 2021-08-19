// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
        <input onChange={event => this.handleChange(event)} type='text' value={this.state.name} />
        <input type='submit' />
        </form>
      </div>
    )
  }
}

export default BandInput
