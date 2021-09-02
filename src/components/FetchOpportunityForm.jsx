import React from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const FetchOpportunityForm = (props) => {
    
    const [show, setShow] = useState(false);
    let domainInput = React.createRef();

    const _submitForm = (event) => {
        event.preventDefault();
        props.fetchCompanyInfo(domainInput.current.value);
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
            >BigPicture Fetch</Button>
        </>
    );
}

export default FetchOpportunityForm;