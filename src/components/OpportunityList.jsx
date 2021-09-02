import OpportunityListEntry from "../components/OpportunityListEntry";
import AddOpportunityForm from "./AddOpportunityForm";
import FetchOpportunityForm from "./FetchOpportunityForm";

const OpportunityList = (props) => {
    return (
        <>
            {props.opportunities.map((opportunity) => (
                <OpportunityListEntry key={opportunity.id} 
                opportunity={opportunity} deleteOpportunity={props.deleteOpportunity}
                />
            ))}
            <AddOpportunityForm addOpportunity={props.addOpportunity}/>
            <FetchOpportunityForm fetchCompanyInfo={props.fetchCompanyInfo}/>
        </>
    );
}

export default OpportunityList;