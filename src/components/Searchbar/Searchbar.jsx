import { Component } from 'react';
import { Header, Form, Button, Span, Input } from './Searchbar.styled';

export class Searchbar extends Component {
  state = { photoTitle: '' };

  handleChange = e => {
    this.setState({photoTitle: e.currentTarget.value})
  };

  handleSubmit = e=>{
    e.preventDefault()
    this.props.onSubmit(this.state.photoTitle);
    this.setState({ photoTitle: '' });

  }

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
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
