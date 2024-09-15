import React from 'react'
import logo from '../assests/Logo.png'
import profile from '../assests/profile.jpg'

const Dashbord = () => {
    return (
        <div class="WrapperArea">
            <div class="WrapperBox">
                <div class="Small-Wrapper">
                    <h4 class="Title">Dashboard</h4>

                    <div class="DashboardArea">
                        <div class="DashboardFilter">
                            <div class="Date">
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
                            <div class="clear"></div>
                        </div>

                        <div class="row">
                            <div class="col-sm-4">
                                <aside>
                                    <h4>users</h4>
                                    <h2 class="Green">25</h2>
                                    <h5><span>Total users :</span> 25</h5>
                                </aside>
                            </div>
                            <div class="col-sm-4">
                                <aside>
                                    <h4>purchases</h4>
                                    <h2 class="Blue">35</h2>
                                    <h5><span>Total purchases :</span> 35</h5>
                                </aside>
                            </div>
                            <div class="col-sm-4">
                                <aside>
                                    <h4>revenue generated</h4>
                                    <h2 class="Red">125</h2>
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
