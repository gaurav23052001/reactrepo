
import './App.css';
import Login from './componets/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashbord from './componets/Dashbord';
import UserManagment from './componets/UserManagment';
import Header from './componets/Header';
import SideNav from './componets/SideNav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

function App() {
  return (
    <>
      {/* <UserManagment/> */}
      <div className='wrapper_main_page'>
        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <h3>Please select a topic.</h3>
          </Route>
        </Switch>


        <Header />
        <div className='wrap_sidebar'>
          <SideNav />
          <Dashbord />
        </div>
      </div>
      {/* <Login/> */}
    </>
  );
}

export default App;
