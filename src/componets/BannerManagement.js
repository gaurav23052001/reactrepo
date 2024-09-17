import React, { useState } from 'react';
import { Modal, Button, Table, Form } from 'react-bootstrap';
import Banner1 from '../assests/banner-1.jpg';


const BannerManagement = () => {
    const [banners, setBanners] = useState([
        { id: 1, name: 'Ghaneyah Akkawi Cheese Bakery', image: 'images/banner-1.jpg', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form' },
        { id: 2, name: 'Ghaneyah Akkawi Cheese Bakery', image: 'images/banner-2.jpg', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form' },
    ]);

    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [bannerToDelete, setBannerToDelete] = useState(null);

    // Modal Handlers
    const handleAddShow = () => setShowAddModal(true);
    const handleAddClose = () => setShowAddModal(false);

    const handleDeleteShow = (banner) => {
        setBannerToDelete(banner);
        setShowDeleteModal(true);
    };

    const handleDeleteClose = () => {
        setShowDeleteModal(false);
        setBannerToDelete(null);
    };

    const handleDeleteBanner = () => {
        setBanners(banners.filter(banner => banner.id !== bannerToDelete.id));
        handleDeleteClose();
    };

    const handleAddBanner = (e) => {
        e.preventDefault();
        const newBanner = {
            id: banners.length + 1,
            name: e.target.bannerName.value,
            image: 'images/default-banner.jpg', // For now, assuming default image as no image uploading logic is handled
            description: e.target.bannerDescription.value,
        };
        setBanners([...banners, newBanner]);
        handleAddClose();
    };

    return (
        <div className="WrapperArea">
            <div className="WrapperBox">
                <div className="Small-Wrapper">
                    <h4 className="Title">Banner Management
                        <a href="#" onClick={handleAddShow}>Add New Banner</a>
                    </h4>

                    <div className="TableList">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Banner Name</th>
                                    <th>Banner Image</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {banners.map((banner, index) => (
                                    <tr key={banner.id}>
                                        <td>{index + 1}</td>
                                        <td>{banner.name}</td>
                                        <td><img src={Banner1} alt={'n/a'} width="100px" /></td>
                                        <td>{banner.description}</td>
                                        <td>
                                            <Button variant="danger" onClick={() => handleDeleteShow(banner)}>
                                                <i className="fa fa-trash"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>

            {/* Add Modal */}
            <Modal show={showAddModal} onHide={handleAddClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Banner</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleAddBanner}>
                        <Form.Group>
                            <Form.Label>Banner Name</Form.Label>
                            <Form.Control type="text" name="bannerName" placeholder="Enter Banner Name" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Banner Image</Form.Label>
                            <Form.Control type="file" name="bannerImage" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={5} name="bannerDescription" placeholder="Enter description..." required />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Delete Modal */}
            <Modal show={showDeleteModal} onHide={handleDeleteClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Banner</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete this banner.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleDeleteClose}>No</Button>
                    <Button variant="danger" onClick={handleDeleteBanner}>Yes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default BannerManagement;
