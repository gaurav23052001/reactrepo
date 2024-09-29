

import React, { useState, useEffect } from 'react';
import { Modal, Button, Table, Form, Pagination } from 'react-bootstrap';
import axios from 'axios'
import { toastMessage } from '../utils/toast';

const ProductManagment = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [productData, getProductData] = useState([]);
    const [deleteIdGet, deleteIdSet] = useState(0);
    const [editIdGet, editIdSet] = useState(0);

    //add
    const [createImageGet, createImageSet] = useState();
    const [createNameGet, createNameSet] = useState();
    const [createCategoryGet, createCategorySet] = useState();
    const [createPriceGet, createPriceSet] = useState();
    const [createDescripationGet, createDescripationSet] = useState();
    //edit
    const [editImageGet, editImageSet] = useState();
    const [editNameGet, editNameSet] = useState();
    const [editCategoryGet, editCategorySet] = useState();
    const [editPriceGet, editPriceSet] = useState();
    const [editDescripationGet, editDescripationSet] = useState();


    const handleShowAdd = () => setShowAddModal(true);
    const handleCloseAdd = () => setShowAddModal(false);

    const handleShowEdit = (id) => {
        editIdSet(id);
        setShowEditModal(true)};

    const handleCloseEdit = () => setShowEditModal(false);

    const handleShowDelete = (_id) => {
        deleteIdSet(_id);
        setShowDeleteModal(true)
    };
    const handleCloseDelete = () => setShowDeleteModal(false);

    const [activePage, setActivePage] = useState(1); // Tracks current page
    const [totalPages, setTotalPages] = useState(1); // Tracks total pages
    const limit = 4; // Items per page

    const deleteapidata = async () =>{
        try {
            console.log(deleteIdGet);
            
            const response = await axios.delete(`${process.env.REACT_APP_API_URL}/product-delete/${deleteIdGet}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })

            toastMessage(response?.data?.data?.message, "success", "ASDFG");

            handleCloseDelete(false);

            fetchProduct(activePage);


        } catch (error) {
            console.log(error);

        }
    }

    const fetchProduct = async (page = 1) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/product-list?page=${page}&limit=${limit}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })

            toastMessage(response?.data?.data?.message, "success", "ASDFG");
            setTotalPages(response?.data?.data?.totalpages); 

            getProductData(response?.data?.data?.data);


        } catch (error) {
            console.log(error);

        }
    };

    const createData = async (e) => {
        e.preventDefault();
        try {
            const form = new FormData();
            form.append("name", createNameGet);
            form.append("image", createImageGet);
            form.append("category", createCategoryGet);
            form.append("price", createPriceGet);
            form.append("descripation", createDescripationGet);
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/create-product`, form,
                {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })

            toastMessage(response?.data?.message, "success", "ASDFG");
            handleCloseAdd(false);
            fetchProduct(activePage);


        } catch (error) {
            console.log(error);

        }
    };

    const editData = async (e) => {
        e.preventDefault();
        try {
            const form = new FormData();
            form.append("id", editIdGet);
            form.append("name", editNameGet);
            form.append("image", editImageGet);
            form.append("category", editCategoryGet);
            form.append("price", editPriceGet);
            form.append("descripation", editDescripationGet);
            const response = await axios.put(`${process.env.REACT_APP_API_URL}/edit-product`, form,
                {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            toastMessage(response?.data?.message, "success", "ASDFG");
            handleCloseEdit(false);
            fetchProduct(activePage);


        } catch (error) {
            console.log(error);

        }
    };


    useEffect(() => {
        fetchProduct(activePage);
    }, [activePage])

    const handlePageChange = (page) => {
        setActivePage(page);       
    };


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
                                    {productData?.length > 0 && productData?.map((item, index) => (
                                        <tr key={item.id || `product=${index}`}>
                                            <td> {index + 1}</td>
                                            <td>{item.name}</td>
                                            <td><img src={item.image} alt='sdfgh' /></td>
                                            <td>{item.category}</td>
                                            <td>{item.price}</td>
                                            <td>{item.descripation}</td>
                                            <td>
                                                <Button variant="warning" onClick={() => handleShowEdit(item._id)}><i className="fa fa-pencil-square-o"></i></Button>
                                                <Button variant="danger" onClick={() =>handleShowDelete(item._id)}><i className="fa fa-trash"></i></Button>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </Table>
                        </div>
                        <Pagination>
                            {[...Array(totalPages)].map((_, index) => (
                                <Pagination.Item
                                    key={index + 1}
                                    active={index + 1 === activePage}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </Pagination.Item>
                            ))}
                        </Pagination>
                    </div>
                </div>
            </div>




            {/* Add Product Modal */}
            <Modal show={showAddModal} onHide={handleCloseAdd}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={createData}>
                        <Form.Group controlId="formProductName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Product Name" onChange={(e)=> createNameSet(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formProductImage">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" onChange={(e)=> createImageSet(e.target.files[0])}/>
                        </Form.Group>
                        <Form.Group controlId="formProductCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select" onChange={(e)=> createCategorySet(e.target.value)}>
                                <option>----- Select Option -----</option>
                                <option>Saudi Products</option>
                                <option>Turkish Products</option>
                                <option>Cypriot products</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formProductPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter per unit Price" onChange={(e)=> createPriceSet(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formProductDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Typing ...." onChange={(e)=> createDescripationSet(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Edit Product Modal */}
            <Modal show={showEditModal} onHide={handleCloseEdit} >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={editData}>
                        <Form.Group controlId="formEditProductName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" onChange={(e)=>editNameSet(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formEditProductImage">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" onChange={(e)=>editImageSet(e.target.files[0])}/>
                        </Form.Group>
                        <Form.Group controlId="formEditProductCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select" onChange={(e)=>editCategorySet(e.target.value)}>
                                <option>electrnic Products</option>
                                <option>vehicle Products</option>
                                <option>food products</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formEditProductPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" onChange={(e)=>editPriceSet(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formEditProductDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(e)=>editDescripationSet(e.target.value)}/>
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
                    <Button variant="danger" onClick={deleteapidata}>Yes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ProductManagment
