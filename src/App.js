import './App.css';
//import Header from './components/admin/Header';
import Menu from './components/admin/Menu';
import Sidebar from './components/admin/Sidebar';
import Dashboard from './components/admin/dashboard/Dashboard';
import Users from './components/admin/user/Users';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div>
		<Menu />
    <BrowserRouter>
        <div>
          <Sidebar />
            <Switch>
             <Route path="/dashboard" component={Dashboard}/>
             <Route path="/users" component={Users}/>
           </Switch>
        </div> 
      </BrowserRouter>
    </div>
  );
}

export default App;
