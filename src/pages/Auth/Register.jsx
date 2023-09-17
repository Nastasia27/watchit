import React from 'react';
import { Paper, TextField, Button } from '@mui/material';
import { useRef , useState} from 'react';
import { handleRegistration } from '../../store/AuthSlice';
import { useDispatch } from 'react-redux';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const data = {
            fullName,
            email,
            password
        }
        console.log(data);  
        dispatch(handleRegistration(data));
    };

    return(
        <div>
            <Paper sx={{padding:'50px'}}>
                <form style={{display:'flex', flexDirection:'column', gap:'10px'}} onSubmit={handleFormSubmit}>
                    <h1>Registration</h1>
                   
                    <TextField 
                       value={fullName} 
                       onChange={(e) => setFullName(e.target.value)} 
                       type="text" 
                       name='fullName'
                       helperText={fullName.length < 5 ? "too short" : ""}/>
                    <TextField 
                       value={email} 
                       onChange={(e) => setEmail(e.target.value)} 
                       type='email' 
                       name='email'/>
                    <TextField 
                       value={password} 
                       onChange={(e) => setPassword(e.target.value)} 
                       type='password' 
                       name='password'/>
                   
                    <Button type='submit'>Register</Button>
                </form>
            </Paper>
        </div>
    );
}

export default Register;