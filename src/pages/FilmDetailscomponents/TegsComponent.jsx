import LabelIcon from '@mui/icons-material/Label';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

function Tags({genres=[]}) {
    return(
        <Grid sx={{display:'flex',
        direction:"row",
        justifyContent:"space-between",
        marginLeft:'20px'}}>
            <LabelIcon sx={{color:'red'}}/>
            <Typography variant="body1" sx={{fontWeight:'600', marginRight:'5px', color:'red'}} color="white">
              TAGS: 
            </Typography>
            <Typography variant="body1" sx={{fontWeight:'600'}} color="white">
              {genres.join(', ')} 
            </Typography>
        </Grid>
    )
}

export default Tags;