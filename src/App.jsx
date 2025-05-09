import './App.css';
import eduImage from './assets/zondicons_education.svg'; // ✅ Correct import
import Home from './assets/Home.svg';  // Fix: Corrected path here
import DLab from './assets/Graduation Cap.svg';  // Fix: Corrected path here
import serv from './assets/serv.svg';  // Fix: Corrected path here
import libr from './assets/libr.svg';  // Fix: Corrected path here
import market from './assets/market.svg';  // Fix: Corrected path here


function App() {
  return (
    <>
      <div className="screen">
        <div className="section-left">
          <img src={eduImage} alt="Education Icon" className="eduimage" />
          <div className="eduname">EduWave</div>
          <button className="dashboard-button">
            <img src={Home} alt="Home" className="home-icon" />
            <span className="dashboard-label">Dashboard</span>
          </button>
          <button className="dashboard-button-b">
            <img src={DLab} alt="Home" className="right-icon" />
            <span className="dashboard-label">Data Lab</span>
          </button>
          <button className="dashboard-button-b">
            <img src={serv} alt="Home" className="home-icon" />
            <span className="dashboard-label">Surveys</span>
          </button>
          <button className="dashboard-button-b">
            <img src={libr} alt="Home" className="home-icon" />
            <span className="dashboard-label">Library</span>
          </button>
          <button className="dashboard-button-b">
            <img src={market} alt="Home" className="home-icon" />
            <span className="dashboard-label">Marketplace</span>
          </button>
        </div>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
