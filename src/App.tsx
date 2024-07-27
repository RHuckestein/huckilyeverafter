import { useState } from 'react';
import './App.css';
import JakeAndRachael from './JakeAndRachael/JakeAndRachael';
import Logan from './Logan/Logan';
import Ryleigh from './Ryleigh/Ryleigh';
import LoganAndRyleigh from './LoganAndRyleigh/LoganAndRyleigh';

function App() {
  const [activeTab, setActiveTab] = useState('JakeAndRachael');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'JakeAndRachael':
        return <JakeAndRachael />;
      case 'Logan':
        return <Logan />;
      case 'Ryleigh':
        return <Ryleigh />;
      case 'LoganAndRyleigh':
        return <LoganAndRyleigh />;
      default:
        return <JakeAndRachael />;
    }
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li onClick={() => setActiveTab('JakeAndRachael')}>Jake and Rachael</li>
          <li onClick={() => setActiveTab('Logan')}>Logan</li>
          <li onClick={() => setActiveTab('Ryleigh')}>Ryleigh</li>
          <li onClick={() => setActiveTab('LoganAndRyleigh')}>Logan and Ryleigh</li>
        </ul>
      </nav>
      <div className="tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
}

export default App;