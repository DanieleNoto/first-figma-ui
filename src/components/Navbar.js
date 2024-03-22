import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-secondary">
      <Container>
        <Navbar.Brand href="#home">TreeBet.org</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/first-figma-ui/">Home</Nav.Link>
            <Nav.Link href="#link">Quote del giorno</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;