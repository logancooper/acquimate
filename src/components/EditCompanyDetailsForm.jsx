//Imports
import React from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import EditLogo from "../Icons/pencil-alt.svg";
import "../styles/styles.css";

//Modal form on the opportunity details page that allows users to edit company details.
const EditCompanyDetailsForm = (props) => {
    //Show variable stored in state
    const [show, setShow] = useState(false);
    //References to capture input
    let editNameInput = React.createRef();
    let editSectorInput = React.createRef();
    let editStatusInput = React.createRef();
    let editKeyContactInput = React.createRef();
    let editWebsiteInput = React.createRef();
    let editDescriptionInput = React.createRef();
    let editLocationInput = React.createRef();

    //submitform function that prevents the default behaviour of reloading the page, then runs the provided editCompanyDetails function and closes the modal.
    const _submitForm = (event) => {
        event.preventDefault();
        props.editCompanyDetails(props.opportunity.id, editNameInput.current.value, editSectorInput.current.value, editStatusInput.current.value, editKeyContactInput.current.value, editWebsiteInput.current.value, editDescriptionInput.current.value, editLocationInput.current.value);
        handleClose();
    }
    //Handle close/open functions. Sets the show variable in state to toggle the visibility of the modal.
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
                            <Form.Label>Edit Company Name</Form.Label>
                            <Form.Control type="text" defaultValue={props.opportunity.company_name} ref={editNameInput} required={true}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Edit Status</Form.Label>
                            <Form.Select defaultValue={props.opportunity.status} ref={editStatusInput}>
                                <option value="Researching">Researching</option>
                                <option value="Pending Approval">Pending Approval</option>
                                <option value="Approved">Approved</option>
                                <option value="Declined">Declined</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Edit Description</Form.Label>
                            <Form.Control type="text" defaultValue={props.opportunity.description} ref={editDescriptionInput}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Edit Sector</Form.Label>
                            <Form.Control type="text" defaultValue={props.opportunity.sector} ref={editSectorInput}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Edit Key Contact</Form.Label>
                            <Form.Control type="text" defaultValue={props.opportunity.key_contact} ref={editKeyContactInput}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Edit Website</Form.Label>
                            <Form.Control type="text" defaultValue={props.opportunity.website} ref={editWebsiteInput}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Edit Location</Form.Label>
                            <Form.Control type="text" defaultValue={props.opportunity.hq_location} ref={editLocationInput}/>
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
            className="editButton"
            ><img src={EditLogo} alt="edit button"/></Button>
        </>
    );
}

export default EditCompanyDetailsForm;