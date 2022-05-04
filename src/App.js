import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/af/:AFCode" element={<Home />} />
            <Route path="/" element={<Home />} /> 
          </Routes>       
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;