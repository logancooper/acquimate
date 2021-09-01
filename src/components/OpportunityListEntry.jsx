import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RemoveOpportunityForm from "../components/RemoveOpportunityForm";

const OpportunityListEntry = (props) => {
    const { opportunity } = props;

    return (
        <>
            <RemoveOpportunityForm opportunity={opportunity} deleteOpportunity={props.deleteOpportunity}/>
            <Container className="todo-card-container">
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col md={4}><Card.Text>{opportunity.company_name}</Card.Text></Col>
                                <Col md={4}><Card.Text>{opportunity.sector}</Card.Text></Col>
                                <Col md={4}><Card.Text>{opportunity.status}</Card.Text></Col>
                            </Row>
                        </Card.Body>
                    </Card>
            </Container>
        </>
    );
}

export default OpportunityListEntry;