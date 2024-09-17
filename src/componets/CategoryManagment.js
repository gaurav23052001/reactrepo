import React, { useState } from 'react';
import { Modal, Button, Table, Form } from 'react-bootstrap';

const CategoryManagement = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [categoryToEdit, setCategoryToEdit] = useState(null);
    const [categoryToDelete, setCategoryToDelete] = useState(null);
    const [categories, setCategories] = useState([
        { id: 1, name: 'Saudi Products' }
    ]);

    // Modal Handlers for Add Category
    const handleAddClose = () => setShowAddModal(false);
    const handleAddShow = () => setShowAddModal(true);

    // Modal Handlers for Edit Category
    const handleEditClose = () => setShowEditModal(false);
    const handleEditShow = (category) => {
        setCategoryToEdit(category);
        setShowEditModal(true);
    };

    // Modal Handlers for Delete Category
    const handleDeleteClose = () => setShowDeleteModal(false);
    const handleDeleteShow = (category) => {
        setCategoryToDelete(category);
        setShowDeleteModal(true);
    };

    // Add Category
    const handleAddCategory = (e) => {
        e.preventDefault();
        const newCategory = { id: categories.length + 1, name: e.target.categoryName.value };
        setCategories([...categories, newCategory]);
        handleAddClose();
    };

    // Edit Category
    const handleEditCategory = (e) => {
        e.preventDefault();
        setCategories(categories.map(cat => cat.id === categoryToEdit.id ? { ...cat, name: e.target.categoryName.value } : cat));
        handleEditClose();
    };

    // Delete Category
    const handleDeleteCategory = () => {
        setCategories(categories.filter(cat => cat.id !== categoryToDelete.id));
        handleDeleteClose();
    };

    return (
        <div className="WrapperArea">
            <div className="WrapperBox">
                <div className="Small-Wrapper">
                    <h4 className="Title">SKU Management
                        <a href="#" onClick={handleAddShow}> Add New Category </a>
                    </h4>

                    <div className="TableList">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Category Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((category, index) => (
                                    <tr key={category.id}>
                                        <td>{index + 1}</td>
                                        <td>{category.name}</td>
                                        <td>
                                            <Button variant="danger" onClick={() => handleDeleteShow(category)}>
                                                <i className="fa fa-trash"></i>
                                            </Button>
                                            <Button variant="success" onClick={() => handleEditShow(category)}>
                                                <i className="fa fa-pencil-square-o"></i>
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
                    <Modal.Title>Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleAddCategory}>
                        <Form.Group>
                            <Form.Label>Category Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Category Name" name="categoryName" required />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Edit Modal */}
            <Modal show={showEditModal} onHide={handleEditClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleEditCategory}>
                        <Form.Group>
                            <Form.Label>Category Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Category Name" name="categoryName" defaultValue={categoryToEdit ? categoryToEdit.name : ''} required />
                        </Form.Group>
                        <Button variant="primary" type="submit">Update</Button>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Delete Modal */}
            <Modal show={showDeleteModal} onHide={handleDeleteClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete this category?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleDeleteClose}>No</Button>
                    <Button variant="danger" onClick={handleDeleteCategory}>Yes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CategoryManagement;
