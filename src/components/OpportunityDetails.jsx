import { useParams } from "react-router-dom";
import EditCompanyDetailsForm from './EditCompanyDetailsForm'
import EditCorporateRepForm from './EditCorporateRepForm'
import EditFinancialStatsForm from './EditFinancialStatsForm'
import AddNoteForm from './AddNoteForm'

const OpportunityDetails = (props) => {
    const {opportunity_id} = useParams();
    const opportunity = props.opportunities.find( (opportunity) => opportunity.id === parseInt(opportunity_id));
    return (
        <>
            <h1>Company Details</h1>
            <p>Company Name: {opportunity.company_name}</p>
            <p>Description: {opportunity.description}</p>
            <p>Company Sector: {opportunity.sector}</p>
            <p>Company Status: {opportunity.status}</p>
            <p>Key Contact: {opportunity.key_contact}</p>
            <p>Website: {opportunity.website}</p>
            <p>HQ Location: {opportunity.hq_location}</p>
            <EditCompanyDetailsForm editCompanyDetails={props.editCompanyDetails} opportunity={opportunity}/>
            <br/>
            
            <h1>Corporate Reputation</h1>
            <p>Twitter: www.twitter.com/{opportunity.twitter}</p>
            <p>Linked-In: www.linkedin.com/{opportunity.linkedin}</p>
            <p>Facebook: www.facebook.com/{opportunity.facebook}</p>
            <EditCorporateRepForm editCorporateRep={props.editCorporateRep} opportunity={opportunity}/>
            <br/>
            
            <h1>Financial Stats</h1>
            <p>Revenue: {opportunity.revenue}</p>
            <p>Number of Employees: {opportunity.number_of_employees}</p>
            <p>Market Cap: {opportunity.market_cap}</p>
            <EditFinancialStatsForm editFinancialStats={props.editFinancialStats} opportunity={opportunity}/>
            <br/>
            
            <h1>Notes</h1>
            {opportunity.notes.map((note) => (
                <p>{note}</p>
            ))}
            <AddNoteForm addNote={props.addNote} opportunity={opportunity}/>
        </>
    );
}

export default OpportunityDetails;