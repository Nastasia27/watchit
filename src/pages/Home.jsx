import FilmCard from '../components/ResponsiveAppBar/FilmCard/FilmCard';
import { Grid } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import useRequest from '../hooks/useRequest';
import {useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../store/SearchSlice';



function Home() {
  //const [search, setSearch] = useState('');
  const apiSearch = useSelector((state) => state.search.search)
  const searchRef = useRef('');
  const apiData = useRequest(apiSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    searchRef.current.focus();
  },[])

  const handleCardClick = (id) => {
    console.log("ID:", id)
  }
  const handleSearch = (e) => {
    dispatch (setSearch(e.target.value));
  }

  return (
    <>
    <Grid container 
      direction="row"
      justifyContent="center"
      alignItems="center" sx={{paddingTop:'20px'}}>
      <input 
        type='text' 
        value={apiSearch} 
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
    </Grid>
    </>
  );
}

export default Home;
