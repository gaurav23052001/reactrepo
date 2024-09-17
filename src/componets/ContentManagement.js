import React, { useState } from 'react';
import { Modal, Button, Tab, Nav } from 'react-bootstrap';

const ContentManagement = () => {
    const [activeTab, setActiveTab] = useState('Service');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const handleTabSelect = (tab) => setActiveTab(tab);
    const handleShowDeleteModal = () => setShowDeleteModal(true);
    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowEditModal = () => setShowEditModal(true);
    const handleCloseEditModal = () => setShowEditModal(false);

    return (
        <div className="WrapperArea">
            <div className="WrapperBox">
                <div className="Small-Wrapper">
                    <h4 className="Title">Content Management</h4>          

                    <div className="HelpArea">
                        <Nav variant="tabs" defaultActiveKey="Service">
                            <Nav.Item>
                                <Nav.Link eventKey="Service" onClick={() => handleTabSelect('Service')}>Terms of Service</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="About" onClick={() => handleTabSelect('About')}>About Us</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="FAQ" onClick={() => handleTabSelect('FAQ')}>FAQ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Social" onClick={() => handleTabSelect('Social')}>Social Links</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Contact" onClick={() => handleTabSelect('Contact')}>Contact Us</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Tab.Content>
                            <Tab.Pane eventKey="Service" className={`tab-pane fade ${activeTab === 'Service' ? 'show active' : ''}`}>
                                <div className="HelpContent">
                                    <a href="#!" className="Edit" onClick={handleShowEditModal}>Edit</a>
                                    <h3>Terms of Service</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content...</p>
                                    {/* Add the rest of your content here */}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="About" className={`tab-pane fade ${activeTab === 'About' ? 'show active' : ''}`}>
                                <div className="HelpContent">
                                    <a href="#!" className="Edit" onClick={handleShowEditModal}>Edit</a>
                                    <h3>About Us</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content...</p>
                                    {/* Add the rest of your content here */}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="FAQ" className={`tab-pane fade ${activeTab === 'FAQ' ? 'show active' : ''}`}>
                                <div className="HelpContent">
                                    <a href="#!" className="Edit" onClick={handleShowEditModal}>Add FAQ</a>
                                    <h3>FAQ</h3>
                                    <h4>1. How do I download the app? 
                                        <span>
                                            <a className="Red" href="#!" onClick={handleShowDeleteModal}>
                                                <i className="fa fa-trash"></i>
                                            </a>
                                            <a className="Green" href="#!" onClick={handleShowEditModal}>
                                                <i className="fa fa-pencil-square-o"></i>
                                            </a>
                                        </span>
                                    </h4>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis...</p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Social" className={`tab-pane fade ${activeTab === 'Social' ? 'show active' : ''}`}>
                                <div className="HelpContent">
                                    <a href="#!" className="Edit" onClick={handleShowEditModal}>Add Social Links</a>
                                    <h3>Social Links</h3>
                                    <fieldset disabled>
                                        <div className="form-group">
                                            <label>Facebook</label>
                                            <input type="text" className="form-control" value="https://www.facebook.com/" />
                                            <span className="Icon"><i className="fa fa-facebook"></i></span>
                                        </div>
                                        <div className="form-group">
                                            <label>Twitter</label>
                                            <input type="text" className="form-control" value="https://twitter.com/explore" />
                                            <span className="Icon"><i className="fa fa-twitter"></i></span>
                                        </div>
                                        <div className="form-group">
                                            <label>Instagram</label>
                                            <input type="text" className="form-control" value="https://www.instagram.com/" />
                                            <span className="Icon"><i className="fa fa-instagram"></i></span>
                                        </div>
                                        <div className="form-group">
                                            <label>LinkedIn</label>
                                            <input type="text" className="form-control" value="https://www.linkedin.com/" />
                                            <span className="Icon"><i className="fa fa-linkedin"></i></span>
                                        </div>
                                        <Button>Update</Button>
                                    </fieldset>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Contact" className={`tab-pane fade ${activeTab === 'Contact' ? 'show active' : ''}`}>
                                <div className="HelpContent">
                                    <a href="#!" className="Edit" onClick={handleShowEditModal}>Edit</a>
                                    <h3>Contact Us</h3>
                                    {/* Add content for Contact Us here */}
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </div>
            </div>

            {/* Delete Modal */}
            <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this FAQ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDeleteModal}>No</Button>
                    <Button variant="primary" onClick={handleCloseDeleteModal}>Yes</Button>
                </Modal.Footer>
            </Modal>

            {/* Edit Modal */}
            <Modal show={showEditModal} onHide={handleCloseEditModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit FAQ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="Category">
                        <div className="form-group">
                            <label>Question</label>
                            <input className="form-control" type="text" defaultValue="How do I download the app?" />
                        </div>
                        <div className="form-group">
                            <label>Answer</label>
                            <textarea className="form-control" rows="8">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis...</textarea>
                        </div>
                        <Button>Update</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ContentManagement;
