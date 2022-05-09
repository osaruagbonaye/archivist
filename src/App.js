import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import NotFound from './NotFound';
function App() {
  return (
    <div className='App'>
    <Router forceRefresh={false}>
      <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home}>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
    </div>
  );
}

export default App;
