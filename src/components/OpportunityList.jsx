import OpportunityListEntry from "../components/OpportunityListEntry";
import AddOpportunityForm from "./AddOpportunityForm";

const OpportunityList = (props) => {
    return (
        <>
            {props.opportunities.map((opportunity) => (
                <OpportunityListEntry key={opportunity.id} 
                opportunity={opportunity} deleteOpportunity={props.deleteOpportunity}
                />
            ))}
            <AddOpportunityForm addOpportunity={props.addOpportunity}/>
        </>
    );
}

export default OpportunityList;