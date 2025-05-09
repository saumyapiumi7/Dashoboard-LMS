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
import SimpleLineChart from './SimpleLineChart.jsx'; // adjust path as needed
import SimplePieChart from './SimplePieChart.jsx'; // adjust path as needed
import EditIcon from './assets/edit.png';
import Profile from './assets/profile.png';
import verification from './assets/Verification Icon.svg';








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


<div className='chartSection'>
  <div className='lineChart'>
    <div className='lineChartTopic'> User Activity</div>
    <div className='chartone'>
    <SimpleLineChart />
    </div>


  </div>

  <div className= 'pieChart'> 
  <div className="daily-active-card">
      <div className="card-header">
        <div>
          <div className="card-title">Daily Active Users</div>
          <div className="noOfUsers">1051</div>
        </div>
        <select className="card-select">
          <option>Daily</option>
        </select>
      </div>

      <div className="chart-section">
        <div  className='pie'>
        <SimplePieChart />
        </div>
      </div>

      <hr className="divider" />

      <div className="subheading">By Authentication Method</div>

      <div className="AuthContainer">
  <div className="Authmethod">
    <div className="Authname">Microsoft</div>
    <div className="AuthLine"></div>
    <div className="AuthUsers">100</div>
  </div>
  <div className="Authmethod">
    <div className="Authname">Internal</div>
    <div className="AuthLine"></div>
    <div className="AuthUsers">100</div>
  </div>
  <div className="Authmethod">
    <div className="Authname">SMAL</div>
    <div className="AuthLine"></div>
    <div className="AuthUsers">100</div>
  </div>
</div>  
    </div>
  </div>
</div>


<div className='ActiveLog'>Activity Log</div>
<div className="LogTable">
  <div className="TableHeader">
    <div className="TableTopic">MESSAGE</div>
    <div className="TableTopic">TIME</div>
  </div>

  <div className="TableRow">
    <div className="MessageText">Username here Permissions changed to admin by admin123</div>
    <div className="TimeText">2hrs ago</div>
  </div>
  <div className="TableRow">
    <div className="MessageText"><strong>Username</strong> Successfully logged-in</div>
    <div className="TimeText">2hrs ago</div>
  </div>
  <div className="TableRow">
    <div className="MessageText">Username here Permissions changed to admin by admin123</div>
    <div className="TimeText">2hrs ago</div>
  </div>
  <div className="TableRow">
    <div className="MessageText"><strong>Username</strong>  Successfully logged-in</div>
    <div className="TimeText">2hrs ago</div>
  </div>
</div>



        </div>

        <div className='ProfileCard'>
    <div className='ProfileName'>Profile</div>
    <img src={EditIcon} alt="" className='EditIcon' />
    <img src={Profile} alt="" className='Profile' />
    <div className='UserProfileName'>Saumya Herath</div>
    <img src={verification} alt="" className='Verification'/>
    <div className='ProfileType'>User</div>



    <div className='calender'>
    <div className="Calendar">
      <div className="CalendarHeader">
        <span>&lt;</span>
        <span className="MonthYear">March 2020</span>
        <span>&gt;</span>
      </div>

      <div className="CalendarWeekdays">
        <div>M</div>
        <div className="HighlightWeekday">T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
        <div>S</div>
      </div>

      <div className="CalendarDates">
        <div>17</div>
        <div  className="HighlightDate"></div>
        <div>19</div>
        <div>20</div>
        <div>21</div>
        <div>22</div>
        <div>23</div>
      </div>
    </div>

    

    </div>
    <hr className="divider1" />

    <div className='announc'>Latest Announcements</div>

    <div className='latestmsg'>
      <div className='sender'>Admin</div>
      <div className='msg' >Exam Time Table - 2020 </div>
      <hr className="divider2" />

    </div>

    <div className='latestmsg'>
      <div className='sender'>Admin</div>
      <div className='msg' >Exam Time Table - 2020 </div>
      <hr className="divider2" />

    </div>

    <div className='latestmsg'>
      <div className='sender'>Admin</div>
      <div className='msg' >Exam Time Table - 2020 </div>
      <hr className="divider2" />

    </div>

    <div className='latestmsg'>
      <div className='sender'>Admin</div>
      <div className='msg' >Exam Time Table - 2020 </div>
      <hr className="divider2" />

    </div>


</div>






              </div>
    </>
  );
}

export default App;
