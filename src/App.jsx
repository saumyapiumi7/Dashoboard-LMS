import './App.css';
import eduImage from './assets/zondicons_education.svg'; // ✅ Correct import
import Home from './assets/Home.svg';  // Fix: Corrected path here
import DLab from './assets/Graduation Cap.svg';  // Fix: Corrected path here
import serv from './assets/serv.svg';  // Fix: Corrected path here
import libr from './assets/libr.svg';  // Fix: Corrected path here
import market from './assets/market.svg';  // Fix: Corrected path here
import hihand from './assets/hi-hand.png';
import search from './assets/search.svg';
import bll from './assets/ball.svg';
import eye from './assets/Eye.svg'




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

        <div className='midsection'>

        <div >
          <div className='namedisplay'>
          Hello, Saumya
          <img src={hihand} alt="hand" className="hand-icon" />
          <p className='nameparadisplay'>Let’s build something impactful today!</p>
          </div>
        </div>

        <div className='search'>
          Search...
          <img src={search} alt="search" className="search-icon" />
        </div>

        
        <div className='bllframe'>
          <img src={bll} alt="bll" className='bll' />
        </div>

        
        <div className='threerec'>
  <div className='rectangle'>
    <div className='topic'>Daily Active Users</div>
    <div className='date'>18 Mar 2020</div>
    <div className='noOfUsers'>1051</div>
    <img src={eye} alt="eye" className='eye' />
  </div>
  <div className='rectangle'>
    <div className='topic'>Monthly Active Users</div>
    <div className='date'>18 Mar 2020</div>
    <div className='noOfUsers'>1051</div>
    <img src={eye} alt="eye" className='eye' />
  </div>
  <div className='rectangle'>
    <div className='topic'>Daily Time Per Active Users</div>
    <div className='date'>18 Mar 2020</div>
    <div className='noOfUsers'>1051</div>
    <img src={eye} alt="eye" className='eye' />
  </div>
</div>

        </div>






              </div>
    </>
  );
}

export default App;
