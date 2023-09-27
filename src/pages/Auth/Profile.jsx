import { Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { getAuth } from "firebase/auth";

function Profile() { 
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user);
    if (user !== null) {
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
    }
    

    return (
        <Grid container 
        alignContent='flex-start'
            >
            <Grid sx={{height:'40px', margin:'20px', padding:'10px'}}>
                <h3>Personal information</h3>
            </Grid>
            
            <Grid container direction='column' sx={{margin:'20px', backgroundColor:'#272627', padding:'10px'}}>
                {user.photoURL ? (
                    <Avatar 
                    src={user.photoURL}
                    sx={{ width: 70, height: 70, margin:'10px' }} />) : (
                        <Avatar 
                    src="/broken-image.jpg"
                    sx={{ width: 70, height: 70, margin:'10px' }} />
                    )}
                <h3 style={{margin:'10px'}}>{user.displayName}</h3>
                <p style={{margin:"10px 10px 0"}}>Email</p>
                <h5 style={{margin:'0 10px'}}>{user.email}</h5>
            </Grid>
        </Grid>
    )

}

export default Profile;