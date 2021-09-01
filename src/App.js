import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import OpportunityList from './components/OpportunityList';
import OpportunityDetails from './components/OpportunityDetails';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opportunities: [
        {
          id: 1,
          company_name: 'Wendys',
          sector: 'Food Service',
          status: 'Researching'
        },
        {
          id: 2,
          company_name: 'Burger King',
          sector: 'Food Service',
          status: 'Approved'
        }
      ],
      idCounter: 3
    }
  }

  _addOpportunity = (opportunityName, opportunitySector, opportunityStatus) => {
    const newOpportunity =         {
      id: this.state.idCounter,
      company_name: opportunityName,
      sector: opportunitySector,
      status: opportunityStatus
    }
    this.setState({
      opportunities: [...this.state.opportunities, newOpportunity],
      idCounter: this.state.idCounter + 1
    });
  };

  _deleteOpportunity = (id) => {
    this.setState({
      opportunities: this.state.opportunities.filter((opportunity) => {
        return opportunity.id != id;
      })
    });
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
      <Router>
        <Route exact path='/'>
          <h1>Opportunities ----- Status ----- Sector</h1>
          <OpportunityList opportunities={this.state.opportunities} addOpportunity={this._addOpportunity} deleteOpportunity={this._deleteOpportunity}/>
        </Route>
        <Route exact path='/:opportunity_id'>
          <Link to={`/`}>
            <button type="button" >Back</button>
          </Link>
          <OpportunityDetails opportunities={this.state.opportunities}/>
        </Route>
      </Router>
      </div>
    );
  }

}

export default App;
