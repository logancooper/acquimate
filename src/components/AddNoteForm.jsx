//Imports
import React from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import PlusIcon from "../Icons/plus.svg";
import "../styles/styles.css";

//Modal form that shows/hides on the opportunity details page, allowing users to add a note.
const AddNoteForm = (props) => {
    //Show variable stored in component state. Controls whether the modal is displayed or hidden.
    const [show, setShow] = useState(false);

    //reference to capture the note input.
    let noteInput = React.createRef();

    //submit form function. Prevents the default behavior to avoid reloading the page, then runs the provided addNote function and closes the modal.
    const _submitForm = (event) => {
        event.preventDefault();
        props.addNote(props.opportunity.id, noteInput.current.value);
        handleClose();
    }

    //Handle Open/Close functions. Sets the show variable in state to false/true to toggle the modal.
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