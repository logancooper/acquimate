import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ArrowLogo from "../Icons/arrow-right-circle-yellow.svg";



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