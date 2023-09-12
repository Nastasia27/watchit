import React from 'react';
import { Paper, TextField, Button } from '@mui/material';
import { useRef , useState, useEffect} from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { handleRegistration } from "../../store/AuthSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const auth = getAuth();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading);
    const token = useSelector((state) => state.auth.accessToken);
    console.log(token);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
          navigate("/home");
        }
      }, [token, navigate]);

    const handleFormSubmit = (e) => {
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
                // ..
            });

        const data = {
            fullName,
            email,
            password
        };
        //dispatch(handleRegistration(data));
        console.log(data);
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
//accessToken