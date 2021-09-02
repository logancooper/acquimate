import React from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import EditLogo from "../Icons/pencil-alt.svg";
import "../styles/styles.css";

const EditFinancialStatsForm = (props) => {
    
    const [show, setShow] = useState(false);
    let editRevenueInput = React.createRef();
    let editNumEmployeesInput = React.createRef();
    let editMarketCap = React.createRef();

    const _submitForm = (event) => {
        event.preventDefault();
        props.editFinancialStats(props.opportunity.id, editRevenueInput.current.value, editNumEmployeesInput.current.value, editMarketCap.current.value);
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