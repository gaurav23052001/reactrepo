
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
        </Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;
