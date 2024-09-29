import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactPaginate from 'react-paginate';
import { toastMessage } from '../utils/toast';

const UserManagement = () => {
    const [show, setShow] = useState(false);
    const [deleteUserId, setDeleteUserId] = useState(null);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(0); // Start from page 0
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 2;

    const handleClose = () => {
        setShow(false);
        setDeleteUserId(null);
    };

    const handleShow = (userId) => {
        setShow(true);
        setDeleteUserId(userId);
    };

    const fetchUsers = async (page = 0) => {
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                setError('No token found');
                setLoading(false);
                return;
            }

            const response = await fetch(`${process.env.REACT_APP_API_URL}/userList?page=${page + 1}&limit=${itemsPerPage}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }

            const data = await response.json();
            setUsers(data?.data?.user);
            setTotalPages(Math.ceil((data?.total || 0) / itemsPerPage));
        } catch (error) {
            toastMessage(error?.response?.data?.message || error.message, "error", "ASDFG");
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers(currentPage);
    }, [currentPage]);

    const handleDelete = async () => {
        const token = localStorage.getItem('token');

        if (!token) {
            toastMessage("No token found", "error", "ASDFG");
            return;
        }

        try {
            const response = await axios.delete(`${process.env.REACT_APP_API_URL}/deleteUser/${deleteUserId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response?.data?.code === 400) {
                return toastMessage(response?.data?.message, "error", "ASDFG");
            }

            toastMessage(response?.data?.message, "success", "ASDFG");
            fetchUsers(currentPage);
            handleClose();
        } catch (error) {
            toastMessage(error?.response?.data?.message || error.message, "error", "ASDFG");
            setError(error.message);
        }
    };

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected); // Update the current page
    };

    return (
        <div>
            <div className="WrapperArea">
                <div className="WrapperBox">
                    <div className="Small-Wrapper">
                        <h4 className="Title">User Management</h4>
                        <div className="TableList">
                            {loading ? <p>Loading...</p> : (
                                <table>
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Mobile</th>
                                            <th>Address</th>
                                            <th>Total Orders</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users?.length > 0 && users?.map((item, index) => (
                                            <tr key={item._id || `user-${index}`}>
                                                <td>{(currentPage * itemsPerPage) + (index + 1)}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.address}</td>
                                                <td>{item.age}</td>
                                                <td>
                                                    <Button variant="danger" onClick={() => handleShow(item._id)}>
                                                        <i className="fa fa-trash"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>

                        {/* Pagination Section using react-paginate */}
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={totalPages}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageChange}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"}
                        />
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete User</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>No</Button>
                    <Button variant="primary" onClick={handleDelete}>Yes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UserManagement;
