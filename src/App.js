import './App.css';
import TestPage from './pages/test';
import { useState } from 'react';

function App() {
  const [menuNo, setMenuNo] = useState(0);
  return (
    <div className="App">
      <div>
        <ul>
          <li onClick={() => setMenuNo(0)} style={{cursor: "pointer"}}>test</li>
        </ul>
      </div>
      {menuNo === 0 && (
        <TestPage />
      )}
    </div>
  );
}

export default App;
