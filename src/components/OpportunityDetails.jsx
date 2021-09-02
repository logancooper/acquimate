import { useParams } from "react-router-dom";
import EditCompanyDetailsForm from './EditCompanyDetailsForm'
import EditCorporateRepForm from './EditCorporateRepForm'
import EditFinancialStatsForm from './EditFinancialStatsForm'
import AddNoteForm from './AddNoteForm'
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Collapse from "react-bootstrap/Collapse"
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import "../styles/styles.css";



const OpportunityDetails = (props) => {
    const {opportunity_id} = useParams();
    const opportunity = props.opportunities.find( (opportunity) => opportunity.id === parseInt(opportunity_id));
    const [descriptionTextOpen, setDescriptionTextOpen] = useState(false);
    return (
        <>
        <Container>
                <Row>
                    <Col>                    
                        <Card className="detailsCard">
                            <Card.Header>
                                <Card.Title className="cardTitle">Company Details</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Company Name: {opportunity.company_name}
                                </Card.Text>
                                <Card.Text>
                                    Sector: {opportunity.sector}
                                </Card.Text>
                                <Card.Text>
                                    Acquisition Status: {opportunity.status}
                                </Card.Text>
                                <Card.Text>
                                    Key Contact: {opportunity.key_contact}
                                </Card.Text>
                                <Card.Text>
                                    Website: {opportunity.website}
                                </Card.Text>
                                <Card.Text>
                                    HQ Location: {opportunity.hq_location}
                                </Card.Text>
                                <Card.Text>
                                    <Button
                                    onClick={() => {setDescriptionTextOpen(!descriptionTextOpen)}}
                                    aria-controls="description-collapse"
                                    aria-expanded={descriptionTextOpen}
                                    variant="info"
                                    >Show Description</Button>
                                    <Collapse in={descriptionTextOpen}>
                                        <div id="description-collapse">
                                            {opportunity.description}
                                        </div>
                                    </Collapse>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs lg="1">
                        <EditCompanyDetailsForm editCompanyDetails={props.editCompanyDetails} opportunity={opportunity}/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card className="detailsCard">
                            <Card.Header>
                                <Card.Title>Corporate Reputation</Card.Title>
                            </Card.Header>
                            <Card.Body>    
                                <Card.Text>
                                    Twitter: www.twitter.com/{opportunity.twitter}
                                </Card.Text>
                                <Card.Text>
                                    Linked-In: www.linkedin.com/{opportunity.linkedin}
                                </Card.Text>
                                <Card.Text>
                                    Facebook: www.facebook.com/{opportunity.facebook}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs lg="1">
                        <EditCorporateRepForm editCorporateRep={props.editCorporateRep} opportunity={opportunity}/>
                    </Col>
                </Row>
            

                <Row>
                    <Col>
                        <Card className="detailsCard">
                            <Card.Header>
                                <Card.Title>Financial Stats</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Revenue: {opportunity.revenue}
                                </Card.Text>
                                <Card.Text>
                                    Number of Employees: {opportunity.number_of_employees}
                                </Card.Text>
                                <Card.Text>
                                    Market Cap: {opportunity.market_cap}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs lg="1">
                        <EditFinancialStatsForm editFinancialStats={props.editFinancialStats} opportunity={opportunity}/>
                    </Col>
                </Row>


                <Row>
                    <Col>
                        <Card className="detailsCard">
                            <Card.Header>
                                <Card.Title>Notes</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                {opportunity.notes.map((note) => (
                                    <Card.Text>{note}</Card.Text>
                                ))}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs lg="1">
                        <AddNoteForm addNote={props.addNote} opportunity={opportunity}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default OpportunityDetails;