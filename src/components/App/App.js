import React, { Component } from 'react';
import './App.css';
import { getUrls, postUrl, deleteUrl } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    getUrls().then(data=> {
      this.setState({urls: data.urls})
    })
  }

  addUrl = (urlToPost) => {
    postUrl(urlToPost).then(data=> console.log('post 23', data))
    getUrls().then(data => {
    this.setState({urls: data.urls}
  )})
  }

  // deleteUrl = (deleteEvent) => {
  //   console.log(deleteEvent)
  //   // deleteUrl(deleteEvent)
  // }

  render() {
    return (
      <main className="App">
        <header>
          <h1 className='app-title'>URL Shortener</h1>
          <UrlForm addUrl={this.addUrl}/>
        </header>
        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
