import React from 'react'
import logo from '../assests/Logo.png'
import profile from '../assests/profile.jpg'

const Dashbord = () => {

    return (
        <div className="WrapperArea">
            <div className="WrapperBox">
                <div className="Small-Wrapper">
                    <h4 className="Title">Dashboard</h4>

                    <div className="DashboardArea">
                        <div className="DashboardFilter">
                            <div className="Date">
                                <input type="date" name="" />
                                <input type="date" name="" />
                                <button>Submit</button>
                            </div>

                            <select>
                                <option>Sort By</option>
                                <option>Today</option>
                                <option>This Week</option>
                                <option>This Month</option>
                                <option>This Year</option>
                            </select>
                            <div className="clear"></div>
                        </div>

                        <div className="row">
                            <div className="col-sm-4">
                                <aside>
                                    <h4>users</h4>
                                    <h2 className="Green">25</h2>
                                    <h5><span>Total users :</span> 25</h5>
                                </aside>
                            </div>
                            <div className="col-sm-4">
                                <aside>
                                    <h4>purchases</h4>
                                    <h2 className="Blue">35</h2>
                                    <h5><span>Total purchases :</span> 35</h5>
                                </aside>
                            </div>
                            <div className="col-sm-4">
                                <aside>
                                    <h4>revenue generated</h4>
                                    <h2 className="Red">125</h2>
                                    <h5><span>Total revenue generated :</span> 125</h5>
                                </aside>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashbord
