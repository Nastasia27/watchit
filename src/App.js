import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppbar';
import FilmCard from './components/ResponsiveAppBar/FilmCard/FilmCard';
import { Grid } from '@mui/material';
import axios from "axios";
import { useState, useEffect, useRef } from 'react';



function App() {
  const [apiData, setApiData] = useState([]);
  const [search, setSearch] = useState('');
  const searchRef = useRef('');

  useEffect(() => {
    searchRef.current.focus();
  },[])
  useEffect(() => {
    async function makeRequest(){
      try {
        if (search.length > 2) {
          const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${search}`);
          setApiData(response.data);
        }
        if (search.length === 0) {
          setApiData([]);
        }
      } catch (error) {
        console.error(error);
      }
      
    }
    makeRequest();
  }, [search]);

  const handleCardClick = (id) => {
    console.log("ID:", id)
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }


  return (
    <div className="App">
      <ResponsiveAppBar/>
      <input type='text' value={search} onChange={handleSearch} ref={searchRef}/>
      <Grid container spacing={2} sx={{ padding: "20px" }}>
      {apiData.map(({show}) =>  (
        <Grid item xs={3} key={show.id}>
          <FilmCard
            id={show.id}
            name={show.name}
            time={show.premiered}
            image={show.image ? show.image.medium : ''}
            eventClick={handleCardClick}
           />
        </Grid>
      ))}
      </Grid>
      
    </div>

  );
}

export default App;
