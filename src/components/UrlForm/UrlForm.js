import React, { Component } from 'react';

class UrlForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      long_url: ''
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addUrl(this.state)
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({title: '', long_url: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
          className ='form-title'
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='long_url'
          value={this.state.long_url}
          onChange={e => this.handleNameChange(e)}
          className='form-url'
        />

        <button onClick={e => this.handleSubmit(e)} className='submit-button'>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
