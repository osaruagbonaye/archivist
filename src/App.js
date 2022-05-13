import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import AssetDetails from './AssetDetails';
import NotFound from './NotFound';
function App() {
  return (
    <div className='App'>
      <Router forceRefresh={false}>
        <div className="App">
          <Navbar></Navbar>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/asset" element={<AssetDetails />} />
              {/* <Route path="/asset/:id" component={Home}>
          </Route> */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
