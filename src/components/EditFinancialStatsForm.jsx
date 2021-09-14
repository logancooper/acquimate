//Imports
import React from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import EditLogo from "../Icons/pencil-alt.svg";
import "../styles/styles.css";

//Modal form for users to edit financial stats fields.
const EditFinancialStatsForm = (props) => {
    //Show variable stored in state. Used to toggle the visibility of the modal.
    const [show, setShow] = useState(false);

    //References to capture input
    let editRevenueInput = React.createRef();
    let editNumEmployeesInput = React.createRef();
    let editMarketCap = React.createRef();

    //submitForm function that prevents default to prevent page reload, runs the provided editFinancialStats function from props, and closes the modal.
    const _submitForm = (event) => {
        event.preventDefault();
        props.editFinancialStats(props.opportunity.id, editRevenueInput.current.value, editNumEmployeesInput.current.value, editMarketCap.current.value);
        handleClose();
    }

    //Handle open/close functions to toggle visibility of the modal.
    const handleClose = () => 
    {   setShow(false)
    };
    const handleOpen = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Financial Stats</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Edit Revenue</Form.Label>
                            <Form.Control type="number" defaultValue={props.opportunity.revenue} ref={editRevenueInput}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Edit Number of Employees</Form.Label>
                            <Form.Control type="number" defaultValue={props.opportunity.number_of_employees} ref={editNumEmployeesInput}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Edit Market Cap</Form.Label>
                            <Form.Control type="number" defaultValue={props.opportunity.market_cap} ref={editMarketCap}/>
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
            ><img src={EditLogo} alt="Edit Button"/></Button>
        </>
    );
}

export default EditFinancialStatsForm;