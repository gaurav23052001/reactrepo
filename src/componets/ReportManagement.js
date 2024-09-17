import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables); // Register chart.js modules

const ReportManagement = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [filter, setFilter] = useState('Sort By');
    const chartRef = useRef(null); // Reference to the canvas element
    const chartInstanceRef = useRef(null); // Reference to the chart instance

    useEffect(() => {
        // Function to initialize the chart
        const initChart = () => {
            const ctx = chartRef.current.getContext('2d');

            // Destroy the existing chart instance if it exists
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            // Create a new chart instance
            chartInstanceRef.current = new Chart(ctx, {
                type: 'bar', // Example chart type
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: 'Sales',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        };

        initChart(); // Call the function to initialize the chart

        // Cleanup chart instance when component unmounts
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, []); // Empty dependency array ensures the chart is initialized once on mount

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Start Date:", startDate, "End Date:", endDate, "Filter:", filter);
        // Add logic to update the chart or data based on date/filter selection
    };

    return (
        <div className="WrapperArea">
            <div className="WrapperBox">
                <div className="Small-Wrapper">
                    <h4 className="Title">Report Management</h4>

                    <div className="DashboardArea">
                        <Form onSubmit={handleSubmit} className="DashboardFilter">
                            <div className="Date">
                                <Form.Control
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                                <Form.Control
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                                <Button type="submit">Submit</Button>
                            </div>

                            <Form.Select
                                value={filter}
                                onChange={handleFilterChange}
                            >
                                <option>Sort By</option>
                                <option>Today</option>
                                <option>This Week</option>
                                <option>This Month</option>
                                <option>This Year</option>
                            </Form.Select>

                            <div className="clear"></div>
                        </Form>

                        <Row>
                            <Col sm={10}>
                                <canvas ref={chartRef} id="myChart"></canvas>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportManagement;
