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
                        <Form.Group className="" controlId="formOpportunityInput">
                            <Form.Label>Enter Opportunity Name</Form.Label>
                            <Form.Control type="text" placeholder="Opportunity Name" ref={opportunityNameInput}/>
                        </Form.Group>
                        <Form.Group className="" controlId="formOpportunityInput">
                            <Form.Label>Enter Opportunity Sector</Form.Label>
                            <Form.Control type="text" placeholder="Opportunity Sector" ref={opportunitySectorInput}/>
                        </Form.Group>
                        <Form.Group className="" controlId="formOpportunityInput">
                            <Form.Label>Enter Opportunity Status</Form.Label>
                            <Form.Control type="text" placeholder="Opportunity Status" ref={opportunityStatusInput}/>
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