import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import OpportunityList from './components/OpportunityList';
import OpportunityDetails from './components/OpportunityDetails';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BackIcon from "./Icons/backward.svg";
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opportunities: [
        {
          id: 1,
          status: 'Researching',
          company_name: 'Wendys',
          description: 'Fast Food Restaurant',
          sector: 'Restaurant',
          key_contact: 'wendy@wendys.com',
          website: 'www.wendys.com',
          hq_location: 'Dublin, OH',
          twitter: 'wendys',
          linkedin: 'wendys',
          facebook: 'wendys',
          revenue: 200000000,
          number_of_employees: 5000,
          market_cap: 100000,
          notes: ["Contacted Wendy on 5/8 via primary email, circling back next week."]
        },
        {
          id: 2,
          status: 'Approved',
          company_name: 'Burger King',
          description: 'The Burger Kings Palace',
          sector: 'Restaurant',
          key_contact: 'theking@burgerking.com',
          website: 'www.burgerking.com',
          hq_location: 'Dublin, OH',
          twitter: 'burgerking',
          linkedin: 'burgerking',
          facebook: 'burgerking',
          revenue: 200000000,
          number_of_employees: 5000,
          market_cap: 100000,
          notes: ["Spoke with The King in person last week, the deal is sealed."]
        }
      ],
      idCounter: 3
    }
  }

  componentDidMount() {
    document.body.style.backgroundColor = "#282c34"
}

  _fetchCompanyInfo = async (domain) => {
    const url = `https://company.bigpicture.io/v1/companies/find?domain=${domain}`;

    const options = {
      headers: {
        Authorization: "0joRyl60Civ85VuImP9UAO:0QWeb3T4q4115Dq01lnpd4"
      }
    };

    fetch(url, options)
      .then( res => res.json() )
      .then( data => {
        console.log(data)

        const newOpportunity = {
          id: this.state.idCounter,
          status: 'N/A',
          company_name: data.legalName,
          description: data.description,
          sector: data.category.sector,
          key_contact: 'N/A',
          website: data.url,
          hq_location: data.location,
          twitter: data.twitter.handle,
          linkedin: data.linkedin.handle,
          facebook: data.facebook.handle,
          revenue: data.metrics.annualRevenue,
          number_of_employees: data.metrics.employees,
          market_cap: data.metrics.marketCap,
          notes: []
        }
        this.setState({
          opportunities: [...this.state.opportunities, newOpportunity],
          idCounter: this.state.idCounter + 1
        });
      
      });
  }

  _addOpportunity = (opportunityName) => {
    const newOpportunity =         {
      id: this.state.idCounter,
      status: 'N/A',
      company_name: opportunityName,
      description: 'N/A',
      sector: 'N/A',
      key_contact: 'N/A',
      website: 'N/A',
      hq_location: 'N/A',
      twitter: 'N/A',
      linkedin: 'N/A',
      facebook: 'N/A',
      revenue: 'N/A',
      number_of_employees: 'N/A',
      market_cap: 'N/A',
      notes: []
    }
    this.setState({
      opportunities: [...this.state.opportunities, newOpportunity],
      idCounter: this.state.idCounter + 1
    });
  };

  _editCompanyDetails = (oppID, updatedName, updatedSector, updatedStatus, updatedContact, updatedWebsite, updatedDescription, updatedLocation) => {
    //find opportunity in opportunityList by providedID
    let editedOpportunities = this.state.opportunities;
    for(let i = 0; i < editedOpportunities.length; i++)
    {
      if(editedOpportunities[i].id === oppID)
      {
        //change the appropriate fields and leave the unchanged fields alone
        editedOpportunities[i] = {
          id: editedOpportunities[i].id,
          status: updatedStatus,
          company_name: updatedName,
          description: updatedDescription,
          sector: updatedSector,
          key_contact: updatedContact,
          website: updatedWebsite,
          hq_location: updatedLocation,
          twitter: editedOpportunities[i].twitter,
          linkedin: editedOpportunities[i].linkedin,
          facebook: editedOpportunities[i].facebook,
          revenue: editedOpportunities[i].revenue,
          number_of_employees: editedOpportunities[i].number_of_employees,
          market_cap: editedOpportunities[i].market_cap,
          notes: editedOpportunities[i].notes
        }
        //set state to edited opportunity list
        this.setState({
          opportunities: editedOpportunities
        });
        break;
      }
    }
  };

  _editCorporateRep = (oppID, updatedTwitter, updatedFacebook, updatedLinkedin) => {
    //find opportunity in opportunityList by providedID
    let editedOpportunities = this.state.opportunities;
    for(let i = 0; i < editedOpportunities.length; i++)
    {
      if(editedOpportunities[i].id === oppID)
      {
        //change the appropriate fields and leave the unchanged fields alone
        editedOpportunities[i] = {
          id: editedOpportunities[i].id,
          status: editedOpportunities[i].status,
          company_name: editedOpportunities[i].company_name,
          description: editedOpportunities[i].description,
          sector: editedOpportunities[i].sector,
          key_contact: editedOpportunities[i].key_contact,
          website: editedOpportunities[i].website,
          hq_location: editedOpportunities[i].hq_location,
          twitter: updatedTwitter,
          linkedin: updatedLinkedin,
          facebook: updatedFacebook,
          revenue: editedOpportunities[i].revenue,
          number_of_employees: editedOpportunities[i].number_of_employees,
          market_cap: editedOpportunities[i].market_cap,
          notes: editedOpportunities[i].notes
        }
        //set state to edited opportunity list
        this.setState({
          opportunities: editedOpportunities
        });
        break;
      }
    }
  };

  _editFinancialStats = (oppID, updatedRevenue, updatedNumberOfEmployees, updatedMarketCap) => {
    //find opportunity in opportunityList by providedID
    let editedOpportunities = this.state.opportunities;
    for(let i = 0; i < editedOpportunities.length; i++)
    {
      if(editedOpportunities[i].id === oppID)
      {
        //change the appropriate fields and leave the unchanged fields alone
        editedOpportunities[i] = {
          id: editedOpportunities[i].id,
          status: editedOpportunities[i].status,
          company_name: editedOpportunities[i].company_name,
          description: editedOpportunities[i].description,
          sector: editedOpportunities[i].sector,
          key_contact: editedOpportunities[i].key_contact,
          website: editedOpportunities[i].website,
          hq_location: editedOpportunities[i].hq_location,
          twitter: editedOpportunities[i].twitter,
          linkedin: editedOpportunities[i].linkedin,
          facebook: editedOpportunities[i].facebook,
          revenue: updatedRevenue,
          number_of_employees: updatedNumberOfEmployees,
          market_cap: updatedMarketCap,
          notes: editedOpportunities[i].notes
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

  _addNote = (oppID, content) => {
    //find opportunity in opportunityList by providedID
    let editedOpportunities = this.state.opportunities;
    for(let i = 0; i < editedOpportunities.length; i++)
    {
      if(editedOpportunities[i].id === oppID)
      {
        //change the appropriate fields and leave the unchanged fields alone
        editedOpportunities[i] = {
          id: editedOpportunities[i].id,
          status: editedOpportunities[i].status,
          company_name: editedOpportunities[i].company_name,
          description: editedOpportunities[i].description,
          sector: editedOpportunities[i].sector,
          key_contact: editedOpportunities[i].key_contact,
          website: editedOpportunities[i].website,
          hq_location: editedOpportunities[i].hq_location,
          twitter: editedOpportunities[i].twitter,
          linkedin: editedOpportunities[i].linkedin,
          facebook: editedOpportunities[i].facebook,
          revenue: editedOpportunities[i].revenue,
          number_of_employees: editedOpportunities[i].number_of_employees,
          market_cap: editedOpportunities[i].market_cap,
          notes: [...editedOpportunities[i].notes, content]
        }
        //set state to edited opportunity list
        this.setState({
          opportunities: editedOpportunities
        });
        break;
      }
    }
  }

  render() {
    return (
      <div className="App">

      <Router>
        <Route exact path='/'>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                Acquimate
              </Navbar.Brand>
            </Container>
          </Navbar>
          <OpportunityList 
          opportunities={this.state.opportunities} 
          addOpportunity={this._addOpportunity} 
          deleteOpportunity={this._deleteOpportunity}
          fetchCompanyInfo={this._fetchCompanyInfo}
          />
        </Route>
        <Route exact path='/:opportunity_id'>

          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={`/`}>
                  <Button variant="dark" ><img src={BackIcon} alt="Back Button"/></Button>
                </Link>
                Acquimate
              </Navbar.Brand>
            </Container>
          </Navbar>
          <OpportunityDetails 
          opportunities={this.state.opportunities} 
          editCompanyDetails={this._editCompanyDetails} 
          editCorporateRep={this._editCorporateRep} 
          editFinancialStats={this._editFinancialStats}
          addNote={this._addNote}
          />
        </Route>
      </Router>
      </div>
    );
  }

}

export default App;
