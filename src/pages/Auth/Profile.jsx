import { Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { getAuth } from "firebase/auth";
import {Button } from '@mui/material';
import userAddingPictureToStorage from './userAddingPictureToStorage';


function Profile() { 
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user)

    const handleUploadAvatarToStorage = (e) => {
        const file = e.target.files[0];
        userAddingPictureToStorage(file)
    }

    const handleReload = () => {
        window.location.reload()
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
                <p style={{margin:'50px 10px', fontSize:'12px'}}>Would you like to add or change your profile picture?</p>
                <input type="file" id='avatar' name='avatar' accept='image/png, image/jpeg' onChange={handleUploadAvatarToStorage}/>
                <Button sx={{marginTop:'5px'}} onClick={handleReload} variant="outlined" size='small'>
                        Upload
                </Button>
            </Grid>
        </Grid>
    )

}

export default Profile;