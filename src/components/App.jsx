import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <GlobalStyle />
        <Searchbar />
      </div>
    );
  }
}
