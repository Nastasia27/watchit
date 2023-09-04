import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer () {
    return( 
      <footer >
        <Grid container spacing={3} 
           direction="row"
           justifyContent="space-around"
           alignItems="center"
           sx={{display:'flex', alignItems:'flex-start'}}
           >
           <Grid item xs={11} md={8}>
               <Stack spacing={2} direction="row">
                  <Button variant="text">Terms Of Use</Button>
                  <Button variant="text">Privacy-policy</Button>
                  <Button variant="text">FAQ</Button>
                  <Button variant="text">Watch list</Button>
               </Stack>
               <Typography variant="caption" >
                 © 2021 STREAMIT. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved.
               </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="body2" style={{margin:'20px'}}>
                Follow Us:
            </Typography>
            <Stack direction="row" spacing={1} style={{margin:'20px'}}>
              <IconButton aria-label="delete">
                 <FacebookIcon />
              </IconButton>
              <IconButton aria-label="delete" disabled color="primary">
                 <TwitterIcon />
              </IconButton>
              <IconButton color="secondary" aria-label="add an alarm">
                  <GoogleIcon />
               </IconButton>
               <IconButton color="primary" aria-label="add to shopping cart">
                  <GitHubIcon />
               </IconButton>
            </Stack>
           </Grid>
        </Grid>
        </footer>
    )
}

export default Footer;