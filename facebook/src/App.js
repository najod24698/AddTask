import './App.css';
import Default from './pages/Default';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useStateValue } from './StateProvider';


function App() {
  // const [{user}] = useStateValue();
  const user = true;
  console.log(user)
  return (
    <Router>
       <div className="app">
         <Switch>
           {user ? <Route exact path="/">
            <Default/>
           </Route>
           :
          <Route exact>
             <Login/>
          </Route>
           }
         </Switch>
      </div>
    </Router>
  );
}

export default App;
