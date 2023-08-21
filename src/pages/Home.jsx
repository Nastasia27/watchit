import FilmCard from '../components/ResponsiveAppBar/FilmCard/FilmCard';
import { Grid } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import useRequest from '../hooks/useRequest';



function Home() {
  const [search, setSearch] = useState('');
  const searchRef = useRef('');
  const apiData = useRequest(search);

  useEffect(() => {
    searchRef.current.focus();
  },[])

  const handleCardClick = (id) => {
    console.log("ID:", id)
  }
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <input 
        type='text' 
        value={search} 
        onChange={handleSearch} 
        ref={searchRef}
      />
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
    </>
  );
}

export default Home;
