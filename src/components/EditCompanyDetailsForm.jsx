import React from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const EditCompanyDetailsForm = (props) => {
    
    const [show, setShow] = useState(false);
    let opportunityEditNameInput = React.createRef();
    let opportunityEditSectorInput = React.createRef();
    let opportunityEditStatusInput = React.createRef();
    let opportunityEditKeyContactInput = React.createRef();
    let opportunityEditWebsiteInput = React.createRef();

    const _submitForm = (event) => {
        event.preventDefault();
        props.editCompanyDetails(props.opportunity.id, opportunityEditNameInput.current.value, opportunityEditSectorInput.current.value, opportunityEditStatusInput.current.value, opportunityEditKeyContactInput.current.value, opportunityEditWebsiteInput.current.value);
        handleClose();
    }

    const handleClose = () => 
    {   setShow(false)
    };
    const handleOpen = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Company Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Edit Opportunity Name</Form.Label>
                            <Form.Control type="text" defaultValue={props.opportunity.company_name} ref={opportunityEditNameInput}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Edit Sector</Form.Label>
                            <Form.Select defaultValue={props.opportunity.sector} ref={opportunityEditSectorInput}>
                                <option value="Restaurant">Restaurant</option>
                                <option value="Financial">Financial</option>
                                <option value="Software">Software</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Edit Status</Form.Label>
                            <Form.Select defaultValue={props.opportunity.status} ref={opportunityEditStatusInput}>
                                <option value="Researching">Researching</option>
                                <option value="Pending Approval">Pending Approval</option>
                                <option value="Approved">Approved</option>
                                <option value="Declined">Declined</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Edit Key Contact</Form.Label>
                            <Form.Control type="text" defaultValue={props.opportunity.key_contact} ref={opportunityEditKeyContactInput}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Edit Website</Form.Label>
                            <Form.Control type="text" defaultValue={props.opportunity.website} ref={opportunityEditWebsiteInput}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button onClick={_submitForm}>Submit Changes</Button>
                </Modal.Footer>
            </Modal>

            <Button 
            onClick={handleOpen}
            >Edit Company Details</Button>
        </>
    );
}

export default EditCompanyDetailsForm;