import React, { useState } from 'react';

const ChangePassword = () => {
    // State hooks for form fields
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [reNewPassword, setReNewPassword] = useState('');

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form validation and submission logic here
        if (newPassword !== reNewPassword) {
            alert("New passwords do not match!");
        } else {
            alert("Password changed successfully!");
            // Proceed with form submission
        }
    };

    return (
        <div className="WrapperArea">
            <div className="WrapperBox">
                <div className="Small-Wrapper"> 
                    <h4 className="Title">Change Password</h4>          

                    <div className="PasswordArea">
                        <div className="row">
                            <div className="col-sm-7">
                                <form onSubmit={handleSubmit}> 
                                    <div className="form-group">
                                        <label htmlFor="oldPassword">Enter Old Password</label>
                                        <input
                                            type="password"
                                            id="oldPassword"
                                            className="form-control"
                                            placeholder="xxxxxxxxxx"
                                            value={oldPassword}
                                            onChange={(e) => setOldPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="newPassword">New Password</label>
                                        <input
                                            type="password"
                                            id="newPassword"
                                            className="form-control"
                                            placeholder="xxxxxxxxxx"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="reNewPassword">Re-enter New Password</label>
                                        <input
                                            type="password"
                                            id="reNewPassword"
                                            className="form-control"
                                            placeholder="xxxxxxxxxx"
                                            value={reNewPassword}
                                            onChange={(e) => setReNewPassword(e.target.value)}
                                        />
                                    </div>
                                    <button type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>                         
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
