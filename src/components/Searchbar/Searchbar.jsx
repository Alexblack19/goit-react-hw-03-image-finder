import {} from './Searchbar.styled'



export function Searchbar() {
  return (
    <header className="searchbar">
      <Form className="form">
        <Button type="submit" className="button">
          <Span className="button-label">Search</Span>
        </Button>

        <Input
          className="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </Form>
    </header>
  );
}
