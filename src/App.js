import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Form, Header, Input, Page, H1, H4} from './styles';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Page>
          <Header>
            <img src="../../public/lock.png" alt=""/>
          </Header>
            <Form>
              <Input placeholder="Username" />
              <Input type="password" placeholder="Password" />
            </Form>
          </Page>
      </div>
    );
  }
}

export default App;
