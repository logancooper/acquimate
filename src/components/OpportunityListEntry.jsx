//Imports
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ArrowLogo from "../Icons/arrow-right-circle-yellow.svg";

//Component generated in the OpportunityList for each individual opportunity. Renders a button that links to the details page for a provided opportunity.
const OpportunityListEntry = (props) => {
    const { opportunity } = props;

    return (
        <>
            <Link to={`/${opportunity.id}`}>
                <Button variant="dark"><img src={ArrowLogo} alt="more button"/></Button>
            </Link>
        </>
    );
}

export default OpportunityListEntry;