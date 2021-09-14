//Imports
import React from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import FetchIcon from "../Icons/search.svg";

//Modal form to fetch information about an opportunity from BigPicture API
const FetchOpportunityForm = (props) => {
    //Show variable stored in state. Used to control the visibility of the modal.
    const [show, setShow] = useState(false);
    
    //Reference to capture input
    let domainInput = React.createRef();

    //submitForm function that prevents the default behaviour of reloading the page, runs the provided fetchCompanyInfo function from props, and closes the modal.
    const _submitForm = (event) => {
        event.preventDefault();
        props.fetchCompanyInfo(domainInput.current.value);
        handleClose();
    }

    //Handle open/close functions to toggle the visibility of the modal.
    const handleClose = () => 
    {   setShow(false)
    };
    const handleOpen = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>BigPicture Fetch</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Enter Opportunity Domain (www.companywebsite.com)</Form.Label>
                            <Form.Control type="text" placeholder="Domain" ref={domainInput}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button onClick={_submitForm}>BigPicture Fetch</Button>
                </Modal.Footer>
            </Modal>

            <Button 
            onClick={handleOpen}
            variant="outline-info"
            ><img src={FetchIcon} alt="fetch icon"/></Button>
        </>
    );
}

export default FetchOpportunityForm;