//Imports
import React from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import PlusIcon from "../Icons/plus.svg";
import '../styles/styles.css'

//Modal form on the opportunity list page that allows users to add a new opportunity
const AddOpportunityForm = (props) => {
    //Show variable stored in state
    const [show, setShow] = useState(false);
    //Reference to capture input
    let opportunityNameInput = React.createRef();

    //Submit handler function. Prevents default to prevent page reload, then runs the provided addOpportunity function and closes.
    const _submitForm = (event) => {
        event.preventDefault();
        props.addOpportunity(opportunityNameInput.current.value);
        handleClose();
    }
    
    //Handle close/open functions. Sets the show variable to toggle the modal.
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
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button onClick={_submitForm}>Add Opportunity</Button>
                </Modal.Footer>
            </Modal>

            <Button 
            onClick={handleOpen}
            variant="outline-info"
            className="addButton"
            ><img src={PlusIcon} alt="Add Button"/></Button>
        </>
    );
}

export default AddOpportunityForm;