import './App.css';
import React
 from 'react';
 import {action,trending,horror,comedy,romance,orginals} from './urls'
import NavBar from './components/navBar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';



function App() {
  return ( 
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={trending} title='TrendingMovies' isSmall/>
      <RowPost url={horror} title='HorrorMovies' isSmall/>
      <RowPost url={comedy} title='ComedyMovies' isSmall/>
      <RowPost url={romance} title='RomanceMovies' isSmall/>
      <RowPost url={action} title='Action' isSmall/>


    </div>
  );
}

export default App;
