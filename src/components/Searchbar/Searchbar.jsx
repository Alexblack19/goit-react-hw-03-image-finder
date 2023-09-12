import { Form, Button, Span, Input } from './Searchbar.styled';

export function Searchbar() {
  return (
    <header>
      <Form>
        <Button type="submit">
          <Span>Search</Span>
        </Button>

        <Input
          type="text"
          //   autocomplete="off"
          //   autofocus
          placeholder="Search images and photos"
        />
      </Form>
    </header>
  );
}
