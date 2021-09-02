import React from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import PlusIcon from "../Icons/plus.svg";
import "../styles/styles.css";

const AddNoteForm = (props) => {
    
    const [show, setShow] = useState(false);
    let noteInput = React.createRef();

    const _submitForm = (event) => {
        event.preventDefault();
        props.addNote(props.opportunity.id, noteInput.current.value);
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
                    <Modal.Title>Add Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Enter Note</Form.Label>
                            <Form.Control type="text" placeholder="Enter Note..." ref={noteInput}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button onClick={_submitForm}>Submit</Button>
                </Modal.Footer>
            </Modal>

            <Button 
            onClick={handleOpen}
            className="editButton"
            variant="novar"
            ><img src={PlusIcon} alt="Add Button"/></Button>
        </>
    );
}

export default AddNoteForm;