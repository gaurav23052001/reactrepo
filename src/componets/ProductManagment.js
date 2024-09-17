

import React, { useState } from 'react';
import { Modal, Button, Table, Form } from 'react-bootstrap';

const ProductManagment = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    // Modal Handlers
    const handleShowAdd = () => setShowAddModal(true);
    const handleCloseAdd = () => setShowAddModal(false);

    const handleShowEdit = () => setShowEditModal(true);
    const handleCloseEdit = () => setShowEditModal(false);

    const handleShowDelete = () => setShowDeleteModal(true);
    const handleCloseDelete = () => setShowDeleteModal(false);

    return (
        <div>
            <div className="WrapperArea">
                <div className="WrapperBox">
                    <div className="Small-Wrapper">
                        <div className="SearchBox">
                            <Form inline>
                                <Form.Control type="text" placeholder="Enter Key" className="mr-sm-2" />
                                <Button variant="primary" type="submit">Apply</Button>
                            </Form>
                            <Button variant="success" onClick={handleShowAdd}>Add New Product</Button>
                        </div>

                        <h4 className="Title">Product Management</h4>
                        <div className="TableList">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th width="150px">Product Name</th>
                                        <th width="100px">Image</th>
                                        <th width="150px">Category</th>
                                        <th>Price</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Ghaneyah Akkawi Cheese Bakery</td>
                                        <td><img src="https://cdt.sa/wp-content/uploads/2020/03/FireShot-Capture-070-.png" alt="" /></td>
                                        <td>Saudi Products</td>
                                        <td>$100.05</td>
                                        <td>There are many variations of passages of Lorem Ipsum available...</td>
                                        <td>
                                            <Button variant="warning" onClick={handleShowEdit}><i className="fa fa-pencil-square-o"></i></Button>
                                            <Button variant="danger" onClick={handleShowDelete}><i className="fa fa-trash"></i></Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Product Modal */}
            <Modal show={showAddModal} onHide={handleCloseAdd}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formProductName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Product Name" />
                        </Form.Group>
                        <Form.Group controlId="formProductImage">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group controlId="formProductCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select">
                                <option>----- Select Option -----</option>
                                <option>Saudi Products</option>
                                <option>Turkish Products</option>
                                <option>Cypriot products</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formProductPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter per unit Price" />
                        </Form.Group>
                        <Form.Group controlId="formProductDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Typing ...." />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Edit Product Modal */}
            <Modal show={showEditModal} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formEditProductName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" defaultValue="Ghaneyah Akkawi Bakery" />
                        </Form.Group>
                        <Form.Group controlId="formEditProductImage">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group controlId="formEditProductCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select">
                                <option>Saudi Products</option>
                                <option>Turkish Products</option>
                                <option>Cypriot products</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formEditProductPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" defaultValue="$100.05" />
                        </Form.Group>
                        <Form.Group controlId="formEditProductDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} defaultValue="There are many variations of passages..." />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Delete Confirmation Modal */}
            <Modal show={showDeleteModal} onHide={handleCloseDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete this product?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDelete}>No</Button>
                    <Button variant="danger" onClick={handleCloseDelete}>Yes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ProductManagment
