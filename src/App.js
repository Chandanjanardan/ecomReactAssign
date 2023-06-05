import { Routes,Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Header from './Header';


function App() {
  return (
    <div className="App">
    {/* <h1>This is app.js</h1> */}
    <Routes>
      
      
      <Route path='/' element={<LandingPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
