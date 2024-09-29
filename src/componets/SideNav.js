import React, { useState } from 'react'
import { Link, useLocation , NavLink} from 'react-router-dom'
import Logout from './Logout';

const SideNav = () => {
    const [openModal,setOpenModal]=useState(false);
    return (
        <div className="SidenavBar">
            <ul>
                <li >
                    <NavLink to="/admin/Dashbord">
                        <span><i className="fa fa-tachometer"></i></span> Dashboard
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/admin/UserManagment'>
                        <span><i className="fa fa-user"></i></span> User Management
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/admin/ProductManagment'>
                        <span><i className="fa fa-product-hunt"></i></span> Product Management
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/admin/SkuManagment'>
                        <span><i className="fa fa-cubes" ></i></span> SKU Management
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/admin/CategoryManagment'>
                        <span><i className="fa fa-database"></i></span> Categories Management
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/admin/OrderManagement'>
                        <span><i className="fa fa-shopping-cart"></i></span> Order Management
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/admin/BannerManagement'>
                        <span><i className="fa fa-codepen"></i></span> Banner Management
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/admin/ReportManagement'>
                        <span><i className="fa fa-bar-chart"></i></span> Report Management
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/admin/PaymentManagement'>
                        <span><i className="fa fa-money"></i></span> Payment Management
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/admin/NotificationManagement'>
                        <span><i className="fa fa-bell"></i></span> Notification Management
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/admin/ContentManagement'>
                        <span><i className="fa fa-font"></i></span> Content Management
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/admin/ChangePassword'>
                        <span><i className="fa fa-cog"></i></span> Change Password
                    </NavLink>
                </li>

                <li>
                    <Link to='' onClick={()=>setOpenModal(true)}>
                        <span><i className="fa fa-sign-out"></i></span> Logout
                    </Link>
                </li>
            </ul>

            {openModal && (
                <Logout
                show={openModal}
                handleClose={()=>setOpenModal(false)}
                />
            )}
        </div>
    )
}

export default SideNav
