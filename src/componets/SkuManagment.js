import React, { useState } from 'react';
import { Modal, Button, Table, Form } from 'react-bootstrap';

const SkuManagment = () => {

    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleAddClose = () => setShowAddModal(false);
    const handleAddShow = () => setShowAddModal(true);

    const handleEditClose = () => setShowEditModal(false);
    const handleEditShow = () => setShowEditModal(true);

    const handleShowDelete = () => setShowDeleteModal(true);
    const handleCloseDelete = () => setShowDeleteModal(false);

    return (
        <div className="WrapperArea">
            <div className="WrapperBox">
                <div className="Small-Wrapper">
                    <div className="SearchBox">
                        <Form inline>
                            <Form.Control type="text" placeholder="Enter Key" className="mr-sm-2" />
                            <Button variant="primary">Apply</Button>
                        </Form>
                        <a href="#" onClick={handleAddShow}>Add SKU Product</a>
                    </div>

                    <h4 className="Title">SKU Management</h4>
                    <div className="TableList">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Product Name</th>
                                    <th>Image</th>
                                    <th>Category</th>
                                    <th>Available units</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Ghaneyah Akkawi Bakery</td>
                                    <td><img src="https://cdt.sa/wp-content/uploads/2020/03/j0tcVqFg-300x226.png" alt="Product" width="50"/></td>
                                    <td>Saudi Products</td>
                                    <td>225</td>
                                    <td>Some description here</td>
                                    <td>
                                        <Button variant="success" onClick={handleEditShow}><i className="fa fa-pencil-square-o"></i></Button>
                                        <Button variant="danger" onClick={setShowDeleteModal}><i className="fa fa-trash"></i></Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>

            {/* Add Modal */}
            <Modal show={showAddModal} onHide={handleAddClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add SKU Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Product Name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select">
                                <option>Saudi Products</option>
                                <option>Turkish Products</option>
                                <option>Cypriot products</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Available units</Form.Label>
                            <Form.Control type="text" placeholder="Enter Available units" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Edit Modal */}
            <Modal show={showEditModal} onHide={handleEditClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit SKU Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                        <Form.Group>
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Product Name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select">
                                <option>Saudi Products</option>
                                <option>Turkish Products</option>
                                <option>Cypriot products</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Available units</Form.Label>
                            <Form.Control type="text" placeholder="Enter Available units" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Delete Modal */}
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
  )
}

export default SkuManagment
