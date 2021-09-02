
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import React from "react";
import { useState } from "react";
import TrashLogo from "../Icons/trash-can-red.svg";


const RemoveOpportunityForm = (props) => {
    const { opportunity } = props;
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const handleDeleteModalClose = () => setDeleteModalShow(false);
    const handleDeleteModalOpen = () => setDeleteModalShow(true);

    const handleModalSubmit = () => {
        props.deleteOpportunity(opportunity.id);
        handleDeleteModalClose();
    }

    return (
        <>
            <Modal show={deleteModalShow} onHide={handleDeleteModalClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Opportunity</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        Are you sure you want to delete this opportunity?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleDeleteModalClose}>Cancel</Button>
                    <Button variant="danger" onClick={handleModalSubmit}>Delete Opportunity</Button>
                </Modal.Footer>
            </Modal>

            <Button className="delete-task-button" variant="dark" onClick={() => handleDeleteModalOpen()}><img src={TrashLogo} alt="Remove Button"/></Button>
        </>
    );
}

export default RemoveOpportunityForm;