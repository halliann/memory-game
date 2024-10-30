import './App.css';
import Gameboard from './components/Gameboard.jsx';
import Sidebar from './components/Sidebar.jsx';
import { useState } from 'react';

function App() {
  const [selectedVillager, setSelectedVillager] = useState(null);

  return (
    <div className="App">
        <Sidebar selectedVillager={selectedVillager} onNewVillager={setSelectedVillager} />
        <Gameboard onNewVillager={setSelectedVillager} />
    </div>
  );
}

export default App;