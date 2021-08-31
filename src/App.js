import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opportunities: []
    }
  }

  render() {
    return (
      <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            Acquimate
          </Navbar.Brand>
        </Container>
      </Navbar>
      <h1>Opportunities ----- Status ----- Sector</h1>
      </div>
    );
  }

}

export default App;
