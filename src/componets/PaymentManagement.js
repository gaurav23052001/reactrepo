import React from 'react';

const PaymentManagement = () => {
    // Example static data for the table, which can later be replaced with dynamic data
    const payments = [
        {
            id: 1,
            paymentId: 'PAYMENT 2503',
            orderId: 'CDT 2548',
            orderDate: '05 March, 2020',
            orderTime: '10:00AM - 02:00PM',
            totalAmount: '$ 2,500',
            paymentMode: 'Visa Card'
        }
    ];

    return (
        <div className="WrapperArea">
            <div className="WrapperBox">
                <div className="Small-Wrapper">
                    <h4 className="Title">Payment Management</h4>
                    <div className="TableList">
                        <table>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Payment Id</th>
                                    <th>Order Id</th>
                                    <th>Order Date</th>
                                    <th>Order Time</th>
                                    <th>Total Amount</th>
                                    <th>Mode of Payment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {payments.map((payment, index) => (
                                    <tr key={payment.id}>
                                        <td>{index + 1}</td>
                                        <td>{payment.paymentId}</td>
                                        <td>{payment.orderId}</td>
                                        <td>{payment.orderDate}</td>
                                        <td>{payment.orderTime}</td>
                                        <td>{payment.totalAmount}</td>
                                        <td>{payment.paymentMode}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentManagement;
