import React, { useState } from 'react';

const NotificationManagement = () => {
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [message, setMessage] = useState('');

    const users = [
        'Mario Speedwagon', 'Petey Cruiser', 'Anna Sthesia', 'Paul Molive', 'Gail Forcewind', 
        'Paige Turner', 'Bob Frapples', 'Buck Kinnear', 'Sue Vaneer', 'Wilma Mumduya', 
        'Don Stairs', 'Graham Cracker', 'Holly Graham', 'Pat Agonia', 'Marvin Gardens', 
        'Donatella Nobatti', 'Polly Science', 'Gabe Lackmen', 'Mary Christmas'
    ];

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedUsers(users);
        } else {
            setSelectedUsers([]);
        }
    };

    const handleUserSelection = (e, user) => {
        if (e.target.checked) {
            setSelectedUsers([...selectedUsers, user]);
        } else {
            setSelectedUsers(selectedUsers.filter((u) => u !== user));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Selected Users:", selectedUsers);
        console.log("Notification Message:", message);
        // Send notification logic goes here
    };

    return (
        <div className="WrapperArea">
            <div className="WrapperBox">
                <div className="Small-Wrapper">
                    <h4 className="Title">Notification Management</h4>          
                    <div className="NotificationArea">
                        <div className="NotificationForm">
                            <h4>Send Notifications</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Select User</label>
                                    <ul className="Multiple">
                                        <li>
                                            <label>
                                                <input 
                                                    type="checkbox" 
                                                    checked={selectedUsers.length === users.length} 
                                                    onChange={handleSelectAll} 
                                                />
                                                Select All
                                            </label>
                                        </li>
                                        {users.map((user, index) => (
                                            <li key={index}>
                                                <label>
                                                    <input 
                                                        type="checkbox" 
                                                        value={user} 
                                                        checked={selectedUsers.includes(user)} 
                                                        onChange={(e) => handleUserSelection(e, user)} 
                                                    />
                                                    {user}
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div> 
                                <div className="form-group">
                                    <label>Notification Message</label>
                                    <textarea 
                                        rows="5" 
                                        className="form-control" 
                                        placeholder="Typing ...." 
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>
                                <button type="submit">Send Notification</button>
                            </form>
                        </div>
                    </div>                                  
                </div>
            </div>
        </div>
    );
};

export default NotificationManagement;
