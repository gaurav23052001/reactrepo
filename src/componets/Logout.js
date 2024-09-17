import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Logout = ({ show, handleClose }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform logout logic here, e.g., clear user data, tokens
        // Example: localStorage.removeItem('userToken');

        // Navigate to the login page or home page after logout
        navigate('/'); // Adjust the route based on your app's routing
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Logout</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to logout?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleLogout}>
                    Logout
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Logout;
