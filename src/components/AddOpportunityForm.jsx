import React from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const AddOpportunityForm = (props) => {
    
    const [show, setShow] = useState(false);
    let opportunityNameInput = React.createRef();
    let opportunitySectorInput = React.createRef();
    let opportunityStatusInput = React.createRef();

    const _submitForm = (event) => {
        event.preventDefault();
        props.addOpportunity(opportunityNameInput.current.value, opportunitySectorInput.current.value, opportunityStatusInput.current.value);
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
                    <Modal.Title>Add Opportunity</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Enter Opportunity Name</Form.Label>
                            <Form.Control type="text" placeholder="Opportunity Name" ref={opportunityNameInput}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Select Opportunity Sector</Form.Label>
                            <Form.Select ref={opportunitySectorInput}>
                                <option value="Restaurant">Restaurant</option>
                                <option value="Financial">Financial</option>
                                <option value="Software">Software</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Select Opportunity Status</Form.Label>
                            <Form.Select ref={opportunityStatusInput}>
                                <option value="Researching">Researching</option>
                                <option value="Pending Approval">Pending Approval</option>
                                <option value="Approved">Approved</option>
                                <option value="Declined">Declined</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button onClick={_submitForm} data-testid="addOpportunityButton">Add Opportunity</Button>
                </Modal.Footer>
            </Modal>

            <Button 
            onClick={handleOpen}
            >Add Opportunity</Button>
        </>
    );
}

export default AddOpportunityForm;