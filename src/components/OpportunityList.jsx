//Imports
import OpportunityListEntry from "../components/OpportunityListEntry";
import AddOpportunityForm from "./AddOpportunityForm";
import FetchOpportunityForm from "./FetchOpportunityForm";
import RemoveOpportunityForm from "../components/RemoveOpportunityForm";
import Table from 'react-bootstrap/Table';
import "../styles/styles.css";


//Main list component of the Opportunity List page. Renders the table and maps through provided opportunities array to generate individual opportunity list entries.
//Also renders the AddOpportunityForm and FetchOpportunityForm below the table for adding new opportunities to the list.
const OpportunityList = (props) => {
    return (
        <>
            <Table bordered hover variant="dark" responsive className="opportunityTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Company Name</th>
                        <th>Status</th>
                        <th>Sector</th>
                        <th>Key Contact</th>
                        <th>Website</th>
                        <th>HQ Location</th>
                        <th>Delete</th>
                        <th>More Details</th>
                    </tr>
                </thead>
                <tbody>
                    {props.opportunities.map((opportunity) => (
                        <tr>
                            <td>{opportunity.id}</td>
                            <td>{opportunity.company_name}</td>
                            <td>{opportunity.status}</td>
                            <td>{opportunity.sector}</td>
                            <td>{opportunity.key_contact}</td>
                            <td>{opportunity.website}</td>
                            <td>{opportunity.hq_location}</td>
                            <td>
                                <RemoveOpportunityForm key={opportunity.id + "_" + opportunity.company_name} opportunity={opportunity} deleteOpportunity={props.deleteOpportunity}/>
                            </td>
                            <td>
                                <OpportunityListEntry key={opportunity.id + "_" + opportunity.company_name} opportunity={opportunity}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <AddOpportunityForm addOpportunity={props.addOpportunity}/>
            <FetchOpportunityForm fetchCompanyInfo={props.fetchCompanyInfo}/>
        </>
    );
}

export default OpportunityList;