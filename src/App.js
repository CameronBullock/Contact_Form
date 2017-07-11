import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input';

import {Form, Header,Textarea, H1, H4} from './styles';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header>
          <H1>Contact Us</H1>
          <H4>Don't hesitate to get a hold of us!</H4>
        </Header>
          <Form>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Textarea />
          </Form>
      </div>
    );
  }
}

export default App;
