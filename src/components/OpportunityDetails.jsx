import { useParams } from "react-router-dom";

const OpportunityDetails = (props) => {
    const {opportunity_id} = useParams();
    const opportunity = props.opportunities.find( (opportunity) => opportunity.id === parseInt(opportunity_id));
    return (
        <>
            <h1>Company Details</h1>
            <p>Company Name: {opportunity.company_name}</p>
            <p>Company Sector: {opportunity.sector}</p>
            <p>Company Status: {opportunity.status}</p>
        </>
    );
}

export default OpportunityDetails;