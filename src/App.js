import './App.css';

import MainCard from './MainCard';
import MainHeader from './Mainheader';
import MoreData from './MoreData';

function App() {
  return (
    <div className="App">
      <div className="sideNav">

      </div>

      <div className='main'>
          <MainHeader />
          <MainCard />
          <MoreData />

      </div>
    </div>
  );
}

export default App;

