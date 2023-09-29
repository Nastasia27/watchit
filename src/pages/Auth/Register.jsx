import React from 'react';
import { Paper, TextField, Button } from '@mui/material';
import { useState, useEffect} from 'react';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {Grid} from '@mui/material';
import Typography from '@mui/material/Typography';
import GoogleIcon from '@mui/icons-material/Google';
import userUpdate from './userUpdate';


const Register = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          userUpdate(fullName);
          console.log(fullName);
          navigate("/home");
            
        } catch (error) {
            const errorMessage = error.message;
            window.alert(errorMessage);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const userCredential = await signInWithPopup(auth,provider);
            const user = userCredential.user;
            navigate("/home");
            
        } catch (error) {
            const errorMessage = error.message;
            window.alert(errorMessage);
        }
    }

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
                   
                    <Button type='submit' size="large" variant="outlined">Register</Button>
                    <Grid container display={"flex"} sx={{marginTop:'10px'}} alignItems="flex-end">
                        <Typography variant="caption" display="block" gutterBottom>
                            Do you have an account?
                        </Typography>
                        <Button size="small" href='login' >Login</Button>
                    </Grid>
                    <Button onClick={handleGoogleSignIn} variant="outlined" startIcon={<GoogleIcon />}>
                        Sign up with Google
                    </Button>
                </form>
            </Paper>
        </div>
    );
}

export default Register;
