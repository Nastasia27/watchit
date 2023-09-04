import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import useRequest from '../../hooks/useRequest';
import InputList from './InputList';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Input.css';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(1),
      width: 'auto',
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  

function Input() {
    const [search, setSearch] = useState('');
    const searchRef = useRef('');
    const apiData = useRequest(search);
    console.log(apiData);

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }


    return (
        <Search sx={{
            display:'flex', 
            direction:'row', 
            justifyContent:'flex-start', 
            alignItems:'center',
            marginRight:'10px',
            height:'50px'
            }}  >
          <SearchIconWrapper>
             <SearchIcon />
          </SearchIconWrapper>
             <Autocomplete
               className='StyledInputBase'
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={apiData} 
                getOptionLabel={(option) => option.show.name} 
                renderOption={(props, option) => (
                    <Link 
                    to={`/films/${option.show.id}`} 
                    className="list-item-link"
                    >
                    
                    <InputList 
                        id={option.show.id}
                        name={option.show.name}
                        image={option.show.image ? option.show.image.medium : ''}
                    /> 
                    </Link>

                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label='search'
                        variant='outlined'
                        size="small"
                        fullWidth
                        value={search}
                        onChange={handleSearch}
                        ref={searchRef}
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                            style:{border:'none'}
                        }}
                    />
                )}
            /> 
        
        </Search>
    );
};

export default Input;

