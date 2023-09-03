import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Container>
          <Navbar.Brand>Dakshin K</Navbar.Brand>
          <Navbar.Toggle>Blog</Navbar.Toggle>
          <Navbar.Toggle>Projects</Navbar.Toggle>
          <Navbar.Toggle>Talks</Navbar.Toggle>
        </Container>
      </Navbar>
      <header className="App-header">
        <p>
          🐱
        </p>
      </header>
    </div>
  );
}

export default App;
