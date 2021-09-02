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
          sector: 'Restaurant',
          status: 'Researching',
          key_contact: 'wendy@wendys.com',
          website: 'www.wendys.com',
          twitter: 'wendys',
          glassdoor: 'wendys',
          linkedin: 'wendys',
          revenue: 200000000,
          number_of_employees: 5000,
          ebitda: '??',
          gross_margin: 50
        },
        {
          id: 2,
          company_name: 'Burger King',
          sector: 'Restaurant',
          status: 'Approved',
          key_contact: 'theking@burgerking.com',
          website: 'www.burgerking.com',
          twitter: 'burgerking',
          glassdoor: 'burgerking',
          linkedin: 'burgerking',
          revenue: 100000000,
          number_of_employees: 4570,
          ebitda: '??',
          gross_margin: 30
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

  _editCompanyDetails = (oppID, updatedName, updatedSector, updatedStatus, updatedContact, updatedWebsite) => {
    //find opportunity in opportunityList by providedID
    let editedOpportunities = this.state.opportunities;
    for(let i = 0; i < editedOpportunities.length; i++)
    {
      if(editedOpportunities[i].id === oppID)
      {
        //change the appropriate fields and leave the unchanged fields alone
        editedOpportunities[i] = {
          id: editedOpportunities[i].id,
          company_name: updatedName,
          sector: updatedSector,
          status: updatedStatus,
          key_contact: updatedContact,
          website: updatedWebsite,
          twitter: editedOpportunities[i].twitter,
          glassdoor: editedOpportunities[i].glassdoor,
          linkedin: editedOpportunities[i].linkedin,
          revenue: editedOpportunities[i].revenue,
          number_of_employees: editedOpportunities[i].number_of_employees,
          ebitda: editedOpportunities[i].ebitda,
          gross_margin: editedOpportunities[i].gross_margin
        }
        //set state to edited opportunity list
        this.setState({
          opportunities: editedOpportunities
        });
        break;
      }
    }
  };

  _editCorporateRep = (oppID, updatedTwitter, updatedGlassdoor, updatedLinkedin) => {
    //find opportunity in opportunityList by providedID
    let editedOpportunities = this.state.opportunities;
    for(let i = 0; i < editedOpportunities.length; i++)
    {
      if(editedOpportunities[i].id === oppID)
      {
        //change the appropriate fields and leave the unchanged fields alone
        editedOpportunities[i] = {
          id: editedOpportunities[i].id,
          company_name: editedOpportunities[i].company_name,
          sector: editedOpportunities[i].sector,
          status: editedOpportunities[i].status,
          key_contact: editedOpportunities[i].key_contact,
          website: editedOpportunities[i].website,
          twitter: updatedTwitter,
          glassdoor: updatedGlassdoor,
          linkedin: updatedLinkedin,
          revenue: editedOpportunities[i].revenue,
          number_of_employees: editedOpportunities[i].number_of_employees,
          ebitda: editedOpportunities[i].ebitda,
          gross_margin: editedOpportunities[i].gross_margin
        }
        //set state to edited opportunity list
        this.setState({
          opportunities: editedOpportunities
        });
        break;
      }
    }
  };

  _editFinancialStats = (oppID, updatedRevenue, updatedNumberOfEmployees, updatedEBITDA, updatedGrossMargin) => {
    //find opportunity in opportunityList by providedID
    let editedOpportunities = this.state.opportunities;
    for(let i = 0; i < editedOpportunities.length; i++)
    {
      if(editedOpportunities[i].id === oppID)
      {
        //change the appropriate fields and leave the unchanged fields alone
        editedOpportunities[i] = {
          id: editedOpportunities[i].id,
          company_name: editedOpportunities[i].company_name,
          sector: editedOpportunities[i].sector,
          status: editedOpportunities[i].status,
          key_contact: editedOpportunities[i].key_contact,
          website: editedOpportunities[i].website,
          twitter: editedOpportunities[i].twitter,
          glassdoor: editedOpportunities[i].glassdoor,
          linkedin: editedOpportunities[i].linkedin,
          revenue: updatedRevenue,
          number_of_employees: updatedNumberOfEmployees,
          ebitda: updatedEBITDA,
          gross_margin: updatedGrossMargin
        }
        //set state to edited opportunity list
        this.setState({
          opportunities: editedOpportunities
        });
        break;
      }
    }
  };

  _deleteOpportunity = (id) => {
    this.setState({
      opportunities: this.state.opportunities.filter((opportunity) => {
        return opportunity.id !== id;
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
          <OpportunityDetails opportunities={this.state.opportunities} editCompanyDetails={this._editCompanyDetails} editCorporateRep={this._editCorporateRep} editFinancialStats={this._editFinancialStats}/>
        </Route>
      </Router>
      </div>
    );
  }

}

export default App;
