//Imports
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import OpportunityList from './components/OpportunityList';
import OpportunityDetails from './components/OpportunityDetails';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BackIcon from "./Icons/backward.svg";
import Button from 'react-bootstrap/Button';

//Main app class
class App extends React.Component {
  constructor(props) {
    super(props);
    //Set initial state with seeded opportunities data.
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
      //Counter to set ID of new opportunities (usually backend would do this)
      idCounter: 3
    }
  }

  //Set the BG color of the document on mount
  componentDidMount() {
    document.body.style.backgroundColor = "#282c34"
  }

  //fetchCompanyInfo function to fetch information from BigPicture API
  _fetchCompanyInfo = async (domain) => {
    //Construct fetch URL
    const url = `https://company.bigpicture.io/v1/companies/find?domain=${domain}`;
    //Set options with auth token
    const options = {
      headers: {
        Authorization: "0joRyl60Civ85VuImP9UAO:0QWeb3T4q4115Dq01lnpd4"
      }
    };
    //Fetch
    fetch(url, options)
      .then( res => res.json() )
      .then( data => {
        //console.log(data)
        //Create a new opportunity with the returned data
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
        //Add the new opportunity to the opportunities array in state, then increment the idCounter.
        this.setState({
          opportunities: [...this.state.opportunities, newOpportunity],
          idCounter: this.state.idCounter + 1
        });
      
      });
  }

  //AddOpportunity function, allows users to manually add a new opportunity to the list by providing a name.
  _addOpportunity = (opportunityName) => {
    //Create a new opportunity with the provided name and ID from state
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
    //Add the new opportunity to the opportunities list and increments the ID counter.
    this.setState({
      opportunities: [...this.state.opportunities, newOpportunity],
      idCounter: this.state.idCounter + 1
    });
  };

  //EditCompanyDetails function that allows users to update company details fields of a specific opportunity on the opportunity details page.
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

  //editCorporateRep function that allows users to update corporate rep fields of a specific opportunity on the opportunity details page.
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

  //editFinancialState function that allows users to update financial stats of a specific opportunity on the opportunity details page.
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

  //deleteOpportunity function that allows users to delete an opportunity from the opportunity list page.
  _deleteOpportunity = (id) => {
    this.setState({
      opportunities: this.state.opportunities.filter((opportunity) => {
        return opportunity.id !== id;
      })
    });
  }

  //addNote function that allows users to add a note to an opportunity. Notes are displayed on the opportunity details page.
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

  //Renders the navbar, Opportunity List component, and Opportunity Details page conditionally within the Router.
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
