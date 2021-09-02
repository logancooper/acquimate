import { useParams } from "react-router-dom";
import EditCompanyDetailsForm from './EditCompanyDetailsForm'
import EditCorporateRepForm from './EditCorporateRepForm'
import EditFinancialStatsForm from './EditFinancialStatsForm'

const OpportunityDetails = (props) => {
    const {opportunity_id} = useParams();
    const opportunity = props.opportunities.find( (opportunity) => opportunity.id === parseInt(opportunity_id));
    return (
        <>
            <h1>Company Details</h1>
            <p>Company Name: {opportunity.company_name}</p>
            <p>Company Sector: {opportunity.sector}</p>
            <p>Company Status: {opportunity.status}</p>
            <p>Key Contact: {opportunity.key_contact}</p>
            <p>Website: {opportunity.website}</p>
            <EditCompanyDetailsForm editCompanyDetails={props.editCompanyDetails} opportunity={opportunity}/>
            <br/>
            <h1>Corporate Reputation</h1>
            <p>Twitter: www.twitter.com/{opportunity.twitter}</p>
            <p>Linked-In: www.linkedin.com/{opportunity.linkedin}</p>
            <p>Corporate Review: www.glassdoor.com/{opportunity.glassdoor}</p>
            <EditCorporateRepForm editCorporateRep={props.editCorporateRep} opportunity={opportunity}/>
            <br/>
            <h1>Financial Stats</h1>
            <p>Revenue: {opportunity.revenue}</p>
            <p>Number of Employees: {opportunity.number_of_employees}</p>
            <p>EBITDA: {opportunity.ebitda}</p>
            <p>Gross Margin: {opportunity.gross_margin}%</p>
            <EditFinancialStatsForm editFinancialStats={props.editFinancialStats} opportunity={opportunity}/>
        </>
    );
}

export default OpportunityDetails;