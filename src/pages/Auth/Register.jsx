import React from 'react';
import { Paper, TextField, Button } from '@mui/material';
import { useState, useEffect} from 'react';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {Grid} from '@mui/material';
import Typography from '@mui/material/Typography';


const Register = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/home");
                const uid = user.uid;
            } else {

            }
            });
      }, [auth, navigate]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage)
            });
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
                   
                    <Button type='submit' size="large" variant="outlined">Register</Button>
                    <Grid conteiner display={"flex"} sx={{marginTop:'10px'}} alignItems="flex-end">
                        <Typography variant="caption" display="block" gutterBottom>
                            Do you have an account?
                        </Typography>
                        <Button size="small" href='login' >Login</Button>
                    </Grid>
                </form>
            </Paper>
        </div>
    );
}

export default Register;
