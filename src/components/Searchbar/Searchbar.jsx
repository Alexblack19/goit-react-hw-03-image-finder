import { Header, Form, Button, Span, Input } from './Searchbar.styled';

export function Searchbar() {
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
        />
      </Form>
    </Header>
  );
}
