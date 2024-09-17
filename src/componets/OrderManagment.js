import React, { useState } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OrderManagement = () => {
    const [orders, setOrders] = useState([
        { id: 1, orderId: 'CDT2455', orderDate: '20/3/2020', customerName: 'David Winsky', number: '+91 876543219', amount: '$150.50', paymentMode: 'Visa Debit', status: 'Processing', statusClass: 'orange' },
        { id: 2, orderId: 'CDT2456', orderDate: '15/04/2020', customerName: 'Paul Molive', number: '+91 8536746985', amount: '$250.50', paymentMode: 'Visa Debit', status: 'Complete', statusClass: 'green' },
    ]);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [orderToDelete, setOrderToDelete] = useState(null);

    // Modal Handlers
    const handleDeleteShow = (order) => {
        setOrderToDelete(order);
        setShowDeleteModal(true);
    };

    const handleDeleteClose = () => {
        setShowDeleteModal(false);
        setOrderToDelete(null);
    };

    const handleDeleteOrder = () => {
        setOrders(orders.filter(order => order.id !== orderToDelete.id));
        handleDeleteClose();
    };

    return (
        <div className="WrapperArea">
            <div className="WrapperBox">
                <div className="Small-Wrapper">
                    <h4 className="Title">Order Management</h4>
                    <div className="TableList">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Order ID</th>
                                    <th>Order Date</th>
                                    <th>Customer Name</th>
                                    <th>Number</th>
                                    <th>Amount</th>
                                    <th>Payment Mode</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) => (
                                    <tr key={order.id}>
                                        <td>{index + 1}</td>
                                        <td>{order.orderId}</td>
                                        <td>{order.orderDate}</td>
                                        <td>{order.customerName}</td>
                                        <td>{order.number}</td>
                                        <td>{order.amount}</td>
                                        <td>{order.paymentMode}</td>
                                        <td>
                                            <span className={order.statusClass}>{order.status}</span>
                                        </td>
                                        <td>
                                            <Button variant="danger" onClick={() => handleDeleteShow(order)}>
                                                <i className="fa fa-trash"></i>
                                            </Button>
                                            <Button variant="primary" as={Link} to="/admin/OrderDetails">
                                                <i className="fa fa-eye"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>

            {/* Delete Modal */}
            <Modal show={showDeleteModal} onHide={handleDeleteClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Order</Modal.Title>s
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete this Category.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleDeleteClose}>No</Button>
                    <Button variant="danger" onClick={handleDeleteOrder}>Yes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default OrderManagement;
