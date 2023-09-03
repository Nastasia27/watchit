import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import useRequest from '../../hooks/useRequest';
import InputList from './InputList';
import { useRef, useState } from 'react';

function Input() {
    const [search, setSearch] = useState('');
    const searchRef = useRef('');
    const apiData = useRequest(search);
    console.log(apiData);

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <Stack spacing={2} sx={{ width: 800 }}>

            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={apiData} // Просто передайте массив данных
                getOptionLabel={(option) => option.show.name} // Выводим название
                renderOption={(props, option) => (
                    <InputList
                        id={option.show.id}
                        name={option.show.name}
                        image={option.show.image ? option.show.image.medium : ''}
                    />
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search input"
                        value={search}
                        onChange={handleSearch}
                        ref={searchRef}
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
            />
        </Stack>
    );
};

export default Input;