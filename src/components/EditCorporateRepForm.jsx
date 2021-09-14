//Imports
import React from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import EditLogo from "../Icons/pencil-alt.svg";
import "../styles/styles.css";

//Modal to allow users to edit coporate rep fields
const EditCorporateRepForm = (props) => {
    
    //show variable stored in state. Used to control the visibility of the modal.
    const [show, setShow] = useState(false);
    
    //References to capture input
    let editTwitterInput = React.createRef();
    let editFacebookInput = React.createRef();
    let editLinkedInInput = React.createRef();
    
    //submitForm function that prevents default to prevent page reload, runs the provided editCorporateRep function from props, the closes the modal.
    const _submitForm = (event) => {
        event.preventDefault();
        props.editCorporateRep(props.opportunity.id, editTwitterInput.current.value, editFacebookInput.current.value, editLinkedInInput.current.value);
        handleClose();
    }
    
    //Handle open/close functions. sets the show variable in state to toggle the visibility of the modal.
    const handleClose = () => 
    {   setShow(false)
    };
    const handleOpen = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Corporate Reputation Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Edit Twitter</Form.Label>
                            <Form.Control type="text" defaultValue={props.opportunity.twitter} ref={editTwitterInput}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Edit Facebook</Form.Label>
                            <Form.Control type="text" defaultValue={props.opportunity.facebook} ref={editFacebookInput}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Edit Linked-In</Form.Label>
                            <Form.Control type="text" defaultValue={props.opportunity.linkedin} ref={editLinkedInInput}/>
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
            variant="novar"
            ><img src={EditLogo} alt="Edit Button"/></Button>
        </>
    );
}

export default EditCorporateRepForm;