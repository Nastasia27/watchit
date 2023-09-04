import React from 'react';
import { Paper, TextField, Button } from '@mui/material';
import { useRef , useState} from 'react';

const Register = () => {
    //закоментила неконтроліруемие елементи
    // const fullNameRef = useRef('');
    // const emailRef = useRef('');
    // const passwordRef = useRef('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // const data = {
        //     fullName: fullNameRef.current.value,
        //     email: emailRef.current.value,
        //     password: passwordRef.current.value
        // };
        const data = {
            fullName,
            email,
            password
        }
        console.log(data);
    };

    return(
        <div>
            <Paper sx={{padding:'50px'}}>
                <form style={{display:'flex', flexDirection:'column', gap:'10px'}} onSubmit={handleFormSubmit}>
                    <h1>Registration</h1>
                    {/* <TextField inputRef={fullNameRef} type="text" name='fullName'/>
                    <TextField inputRef={emailRef} type='email' name='email'/>
    <TextField inputRef={passwordRef} type='password' name='password'/> */}
                    <TextField 
                       value={fullName} 
                       onChange={(e) => setFullName(e.target.value)} 
                       type="text" 
                       name='fullName'
                       helperText={fullName.length < 5 ? "too short" : ""}/>
                    <TextField 
                       value={email} 
                       onChange={(e) => setPassword(e.target.value)} 
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