import React from 'react'
import UserManagment from './UserManagment'
import { Link } from 'react-router-dom'

const SideNav = () => {
    return (
        <div class="SidenavBar">
            <ul>
                <li className="active">
                    <Link to="/admin/Dashbord">
                        <span><i className="fa fa-tachometer"></i></span> Dashboard
                    </Link>
                </li>

                <li>
                    <Link to='/admin/UserManagment'>
                        <span><i class="fa fa-user"></i></span> User Management
                    </Link>
                </li>

                <li>
                    <Link to='/admin/ProductManagment'>
                        <span><i class="fa fa-product-hunt"></i></span> Product Management
                    </Link>
                </li>

                <li>
                    <a href="sku-management.html">
                        <span><i class="fa fa-cubes" ></i></span> SKU Management
                    </a>
                </li>

                <li>
                    <a href="categories-management.html">
                        <span><i class="fa fa-database"></i></span> Categories Management
                    </a>
                </li>

                <li>
                    <a href="order-management.html">
                        <span><i class="fa fa-shopping-cart"></i></span> Order Management
                    </a>
                </li>

                <li>
                    <a href="banner-management.html">
                        <span><i class="fa fa-codepen"></i></span> Banner Management
                    </a>
                </li>

                <li>
                    <a href="report-management.html">
                        <span><i class="fa fa-bar-chart"></i></span> Report Management
                    </a>
                </li>

                <li>
                    <a href="payment-management.html">
                        <span><i class="fa fa-money"></i></span> Payment Management
                    </a>
                </li>

                <li>
                    <a href="notification-management.html">
                        <span><i class="fa fa-bell"></i></span> Notification Management
                    </a>
                </li>

                <li>
                    <a href="content-management.html">
                        <span><i class="fa fa-font"></i></span> Content Management
                    </a>
                </li>

                <li>
                    <a href="change-password.html">
                        <span><i class="fa fa-cog"></i></span> Change Password
                    </a>
                </li>

                <li>
                    <a href="login.html">
                        <span><i class="fa fa-sign-out"></i></span> Logout
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SideNav
