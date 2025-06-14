import { BrowserRouter, Routes, Route } from 'react-router-dom';
import First from './first';
import Second from './second'; // not second.jsx path

function App() {
  return (

      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/second" element={<Second />} />
      </Routes>

  );
}

export default App;
