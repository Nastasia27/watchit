import React from 'react';
import { Paper, TextField, Button } from '@mui/material';
import { useRef , useState} from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Grid} from '@mui/material';
import Typography from '@mui/material/Typography';
import { useNavigate} from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import GoogleIcon from '@mui/icons-material/Google';



const Register = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/home");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                window.alert(errorMessage);
            });
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
                   
                    <Button type='submit' size="large" variant="outlined" >Log in</Button>
                    <Grid conteiner display={"flex"} sx={{marginTop:'10px'}} alignItems="flex-end">
                    <Typography variant="caption" display="block" gutterBottom>
                        Don't have an account?
                    </Typography>
                        <Button size="small" href='register' >Register</Button>
                    </Grid>
                    <Button onClick={handleGoogleSignIn} variant="outlined" startIcon={<GoogleIcon />}>
                        Sign in with Google
                    </Button>
                    
                </form>
            </Paper>
        </div>
    );
}

export default Register;