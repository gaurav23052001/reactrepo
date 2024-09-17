
import './App.css';
import Login from './componets/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashbord from './componets/Dashbord';
import UserManagment from './componets/UserManagment';
import Layout from './componets/Layout';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Link,
  // useRouteMatch,
  useParams,
  Routes
} from "react-router-dom";
import ProductManagment from './componets/ProductManagment';
import SkuManagment from './componets/SkuManagment';
import CategoryManagment from './componets/CategoryManagment';
import OrderManagement from './componets/OrderManagment';
import OrderDetails from './componets/OrderDetails';
import BannerManagement from './componets/BannerManagement';
import ReportManagement from './componets/ReportManagement';
import PaymentManagement from './componets/PaymentManagement';
import NotificationManagement from './componets/NotificationManagement';
import ContentManagement from './componets/ContentManagement';
import ChangePassword from './componets/ChangePassword';
import Logout from './componets/Logout';

function App() {
  return (
    // <Router>
    <>
      {/* <UserManagment/> */}
      
      {/* <div className='wrapper_main_page'> */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin/" element={<Layout />}>
          <Route path="Dashbord" element={<Dashbord />} />
          <Route path="UserManagment" element={<UserManagment />} />
          <Route path="ProductManagment" element={<ProductManagment />} />
          <Route path="SkuManagment" element={<SkuManagment />} />
          <Route path="CategoryManagment" element={<CategoryManagment />} />
          <Route path="OrderManagement" element={<OrderManagement />} />
          <Route path="OrderDetails" element={<OrderDetails />} />
          <Route path="BannerManagement" element={<BannerManagement />} />
          <Route path="ReportManagement" element={<ReportManagement />} />
          <Route path="PaymentManagement" element={<PaymentManagement/>} />
          <Route path="NotificationManagement" element={<NotificationManagement/>} />
          <Route path="ContentManagement" element={<ContentManagement />} />
          <Route path="ChangePassword" element={<ChangePassword />} />
          <Route path="Logout" element={<Logout />} />
        </Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;
