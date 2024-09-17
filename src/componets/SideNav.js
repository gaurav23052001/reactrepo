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
                    <Link to='/admin/SkuManagment'>
                        <span><i class="fa fa-cubes" ></i></span> SKU Management
                    </Link>
                </li>

                <li>
                    <Link to='/admin/CategoryManagment'>
                        <span><i class="fa fa-database"></i></span> Categories Management
                    </Link>
                </li>

                <li>
                    <Link to='/admin/OrderManagement'>
                        <span><i class="fa fa-shopping-cart"></i></span> Order Management
                    </Link>
                </li>

                <li>
                    <Link to='/admin/BannerManagement'>
                        <span><i class="fa fa-codepen"></i></span> Banner Management
                    </Link>
                </li>

                <li>
                    <Link to='/admin/ReportManagement'>
                        <span><i class="fa fa-bar-chart"></i></span> Report Management
                    </Link>
                </li>

                <li>
                    <Link to='/admin/PaymentManagement'>
                        <span><i class="fa fa-money"></i></span> Payment Management
                    </Link>
                </li>

                <li>
                    <Link to='/admin/NotificationManagement'>
                        <span><i class="fa fa-bell"></i></span> Notification Management
                    </Link>
                </li>

                <li>
                    <Link to='/admin/ContentManagement'>
                        <span><i class="fa fa-font"></i></span> Content Management
                    </Link>
                </li>

                <li>
                    <Link to='/admin/ChangePassword'>
                        <span><i class="fa fa-cog"></i></span> Change Password
                    </Link>
                </li>

                <li>
                    <Link to='/admin/Logout'>
                        <span><i class="fa fa-sign-out"></i></span> Logout
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideNav
