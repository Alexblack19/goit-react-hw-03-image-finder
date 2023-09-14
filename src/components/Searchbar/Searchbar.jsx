import { Component } from 'react';
import { Header, Form, Button, Span, Input } from './Searchbar.styled';

export class Searchbar extends Component {
  state = { photoTitle: '' };

  handleChange = e => {
    this.setState({photoTitle: e.currentTarget.value})
  };

  render() {
    return (
      <Header>
        <Form>
          <Button type="submit">
            <Span>Search</Span>
          </Button>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </Form>
      </Header>
    );
  }
}
