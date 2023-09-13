import React from 'react';
import { Paper, TextField, Button } from '@mui/material';
import { useRef , useState} from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Grid} from '@mui/material';
import Typography from '@mui/material/Typography';

const Register = () => {
    const auth = getAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    return(
        <div>
            <Paper sx={{padding:'50px'}}>
                <form style={{display:'flex', flexDirection:'column', gap:'10px'}} onSubmit={handleFormSubmit}>
                    <h1 style={{margin:'auto'}}>Log in</h1>
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
                   
                    <Button type='submit' size="large" variant="outlined">Log in</Button>
                    <Grid conteiner display={"flex"} sx={{marginTop:'10px'}} alignItems="flex-end">
                    <Typography variant="caption" display="block" gutterBottom>
                        Don't have an account?
                    </Typography>
                        <Button size="small" href='register' >Register</Button>
                    </Grid>
                    
                </form>
            </Paper>
        </div>
    );
}

export default Register;