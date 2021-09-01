
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import React from "react";
import { useState } from "react";

const RemoveOpportunityForm = (props) => {
    const { opportunity } = props;
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const handleDeleteModalClose = () => setDeleteModalShow(false);
    const handleDeleteModalOpen = () => setDeleteModalShow(true);

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
                    <Button variant="danger" onClick={() => props.deleteOpportunity(opportunity.id)}>Delete Opportunity</Button>
                </Modal.Footer>
            </Modal>

            <Button className="delete-task-button" variant="danger" onClick={() => handleDeleteModalOpen()}>🗑️</Button>
        </>
    );
}

export default RemoveOpportunityForm;