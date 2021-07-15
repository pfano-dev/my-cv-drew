import React from 'react';
import "./style.css"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import SchoolIcon from '@material-ui/icons/School';
import DeleteIcon from '@material-ui/icons/Delete';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FaceIcon from '@material-ui/icons/Face';
import { makeStyles } from '@material-ui/core/styles'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import WorkIcon from '@material-ui/icons/Work';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import PinDropIcon from '@material-ui/icons/PinDrop';
import PhoneAndroidSharpIcon from '@material-ui/icons/PhoneAndroidSharp';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BusinessIcon from '@material-ui/icons/Business';


const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height:0,
  },
  thumb: {
    height: 0,
    width: 2,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -0,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-0% + 4px)',
  },
  track: {
    height: 5,
    borderRadius: 4,
    width:255,
  },
  rail: {
    height: 5,
    borderRadius: 4,
    width:275,
  },
})(Slider);


const mystyle={

  backgroundColor: "#37474f",
  height:'195px'


}
const style={


  borderRadius: '0px',
  fontSize:'30px',
 
}
const pstyle={


  borderRadius: '0px',
  fontSize:'30px',
  backgroundColor:"#cfd8dc"
}

const tyle={

  borderRadius: '0px',
  fontSize:'30px',
  width:'100%',
  height:'190px',
  borderStyle:"none"
  
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  image: {
    width: 150,
    height: 137,
    margin:'auto',
  
  },
  img: {
    margin: ' auto',
    maxWidth: '100%',
    maxHeight: '100%',},
   
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className="ED">
      <Grid className="FD" container spacing={}>
        <Grid className="HD" style={tyle} container spacing={} item xs={12}>
        <Paper className="ID" style={tyle} className={classes.paper}>
        <Grid className= "kb" style={mystyle} container spacing={3}>
          <Grid className="grid" item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://scontent.fpry1-1.fna.fbcdn.net/v/t1.6435-9/74331382_2219688434997351_7283827594108076032_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_eui2=AeHYr8MCU1qN7cnXM0w7PumFjvfjZgn8XHWO9-NmCfxcdSWDaiqGqNWP6L78FxM-Ht699lBZwSde_Y08ybs0KIJj&_nc_ohc=vw1Vg885QJMAX8Seh_q&tn=AZGMgflZ3oKMdGfC&_nc_pt=5&_nc_ht=scontent.fpry1-1.fna&oh=523b1fd5381cecbb4adf19136ea56896&oe=60EDC0E0" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid className="head" item xs>
                <Typography style={{ borderStyle:"solid", borderColor:"gray", borderWidth:'2px',padding:'10px', marginTop :'10px' ,height :'110px',textAlign:"center" }} gutterBottom variant="subtitle1">
                <h2 style={{ color: '#eceff1', marginTop :'20px' }}>  Muleya pfano</h2>

                <h5 style={{ fontSize: '12px' ,color:"#b2dfdb " }}> SOFTWARE DEVELOPER
</h5>
       
                </Typography>
                
             
               
              </Grid>
              
            </Grid>
            <Grid item>
            <Grid style={{ marginTop:'10%' ,marginLeft:'50px', color: '#26a69a' }} item xs={1}>
        <FacebookIcon style={{ color: '#eceff1' }} />
        < TwitterIcon style={{ color: '#eceff1' }} />
        <WhatsAppIcon style={{ color: '#eceff1' }}/>
        <LinkedInIcon  style={{ color: '#eceff1' }}/>
      </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
        </Grid>
        <Grid  style={{ borderRadius: '0px',fontSize:'30px',marginTop:'15px' , backgroundColor:"#cfd8dc"}} item xs={5}>
       

      <Paper style={pstyle}className={classes.paper}>
        <Grid style={{borderBottom:"solid", borderColor:"#263238", borderWidth:'2px' , backgroundColor:"##cfd8dc"  }} container wrap="nowrap" spacing={2}>
         
          <Grid item xs>
            <Typography><h3 style={{ fontSize: '20px', color: '#212121', width:'190px', textAlign:"center", marginLeft:'5px', marginTop:'50px', marginBottom:'20px' }}><CallIcon style={{ marginLeft:'5px',marginRight:'5px'}}/>CONTACT INFO</h3>
            <p style={{ fontSize: '16px', color: '#212121',margin:'10px' }}>
             <PinDropIcon style={{ marginLeft:'35px',color: '#000000' }}/> Address : 16 Dits Lotus Garden pretoria
            </p>
            <p style={{ fontSize: '16px', color: "black",margin:'10px' }}><PhoneAndroidSharpIcon style={{marginLeft:'35px', color: '#000000' }}/> 
              Cellphone no : 0796495495{' '}
            </p>
            <p style={{ fontSize: '16px', color: '#212121',margin:'10px' }}>< EmailIcon style={{ marginLeft:'35px',color: '#000000' }}/>
              Email address : gerru1000@gmail.com{' '}
            </p></Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper style={pstyle}className={classes.paper}>
        <Grid style={{borderBottom:"solid", borderColor:"#263238", borderWidth:'2px' , backgroundColor:"#cfd8dc"  }} container wrap="nowrap" spacing={2}>
         
          <Grid item xs>
            <Typography><h3  style={{ fontSize: '20px', color: '#212121', width:'180px', textAlign:"center", marginLeft:'px',marginTop:'20px', marginBottom:'25px',marginTop:'25px' }}><BusinessIcon/>HIGH SCHOOL</h3>
            <p style={{ marginLeft:'36px',fontSize: '18px', color: "black",marginTop:'15px', marginBottom:'15px',marginTop:'15px', marginBottom:'15px' }}>
            Grade passed :	Grade 12
{' '}
            </p>
            <p style={{marginLeft:'36px', fontSize: '18px', color: "black",marginTop:'15px', marginBottom:'15px' }}>School attended :	Azwifarwi secondary School </p>
            <p style={{ marginLeft:'36px',fontSize: '18px', color: "black",marginTop:'15px', marginBottom:'15px' }}>
              
                Year :	2015
            </p></Typography>
          </Grid>
        </Grid>
      </Paper>
      
      <Paper style={pstyle}className={classes.paper}>
        <Grid style={{ borderBottom:"solid", borderColor:"#263238", borderWidth:'2px'  , backgroundColor:"##cfd8dc"}} container wrap="nowrap" spacing={2}>
        
          <Grid item xs>
            <Typography>

            <h3  style={{ fontSize: '20px', margin:'5px', color: '#212121', width:'140px', textAlign:"center", marginLeft:'0px',marginTop:'20px', marginBottom:'20px' }}><SchoolIcon/>TERTIARY </h3>
            <p style={{marginLeft:'37px', fontSize: '18px', color: "black",marginTop:'15px', marginBottom:'15px' }}>
              Institution :	University of Venda                                                             
{' '}
            </p>
            <p style={{ marginLeft:'37px',fontSize: '18px', color: "black",marginTop:'15px', marginBottom:'15px' }}>Degree:                                                            Bachelor of Science in Computer Science and                                                                                                        	Information system  &  Bachelor of Science in Computer Science and Mathematics </p>
            
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper style={pstyle}className={classes.paper}>
        <Grid style={{  borderBottom:"solid", borderColor:'#263238', borderWidth:'2px', backgroundColor:"#cfd8dc"}} container wrap="nowrap" spacing={2}>
          
          <Grid  item xs>
            <Typography><h3  style={{ fontSize: '20px', color: '#212121', width:'205px', textAlign:"center", marginLeft:'0px',marginTop:'50px', marginBottom:'40px' }}><EmojiObjectsIcon/>SKILLS METRICS</h3>
            <Typography style={{marginLeft:'60px',}} gutterBottom> <h5 style={{marginLeft:'100px', fontSize: '10px',margin:'5px', color: '#212121 ' }}>
              HTML
            </h5></Typography>
      <PrettoSlider style={{ marginLeft:'40px',cursor:"default", color: '#212121'}} defaultValue={52} />

      <Typography style={{marginLeft:'60px',}}  gutterBottom> <h5 style={{ fontSize: '10px',margin:'5px', color: '#212121 ' }}>
              CSS
            </h5></Typography>
      <PrettoSlider style={{ marginLeft:'40px',cursor:"default", color: '#212121'}}  defaultValue={50} />

            </Typography>
            
            <Typography style={{marginLeft:'60px',}}  gutterBottom> <h5 style={{ fontSize: '10px',margin:'5px', color: '#212121' }}>
              java
            </h5></Typography>
      <PrettoSlider style={{marginLeft:'40px', cursor:"default", color: '#212121'}} defaultValue={48} />
      <Typography style={{marginLeft:'60px',}}  gutterBottom> <h5 style={{ fontSize: '10px',margin:'5px', color: '#212121' }}>
              javascript
            </h5></Typography>
      <PrettoSlider  style={{ marginLeft:'40px',cursor:"default", color: '#212121'}} defaultValue={45} />

 
          </Grid>
        </Grid>
      </Paper>
        </Grid>
        <Grid  style={{ borderLeft:"solid", borderColor:"#263238 ", borderWidth:'4px', marginTop:'15px'  }}  item xs={7}>



        <Paper style={style}className={classes.paper}>
        <Grid  container wrap="nowrap" spacing={2}>
        
          <Grid item xs>
            <Typography><h3 style={{ fontSize: '25px', color: '#212121', width:'150px', textAlign:"center", marginLeft:'0px', marginTop:'30px', marginBottom:'30px' }}> <FaceIcon/>PROFILE</h3>
            <p style={{  marginLeft:'45px',fontSize: '16px', color: "black" }}>
            I am a hard worker, energetic, Self motivated, driven, goal oriented and ambitious individual who is dedicated and task oriented. I am outstanding in working with other people in terms of pursuing goals to reach the main objective at a particular time.
            </p>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      

          <Paper style={style} className={classes.paper}>  <h3 style={{ fontSize: '25px',margin:'5px', color: '#212121',width:'350px',  textAlign:"center", marginLeft:'0px', marginTop:'30px', marginBottom:'40px' }}>
             <AccountCircleIcon/> PERSONAL PARTICULARS
            </h3>
            <p style={{ marginLeft:'50px', fontSize: '18px',marginTop:'10px', color: "black" }}>
              First name : Pfano
            </p>
            <p style={{ marginLeft:'50px', fontSize: '18px',marginTop:'10px', color: "black" }}>Surname : Muleya </p>
            <p style={{ marginLeft:'50px', fontSize: '18px',marginTop:'10px', color: "black" }}>
              Date of birth : 19 December 1996
            </p>
            <p style={{  marginLeft:'50px',fontSize: '18px',marginTop:'10px', color: "black" }}>
              Identity no : 9612196217080
            </p>
            <p style={{ marginLeft:'50px', fontSize: '18px',marginTop:'10px', color: "black" }}>Gender : Male </p>
            <p style={{ marginLeft:'50px', fontSize: '18px',marginTop:'10px', color: "black" }}>
              Nationality : South Africa
            </p>
            <p style={{  marginLeft:'50px',fontSize: '18px',marginTop:'10px', color: "black" }}>
              Health : Excellent
            </p>
            <p style={{  marginLeft:'50px',fontSize: '18px',marginTop:'10px', color: "black" }}>
              Email : Gerru1000@gmail.com
            </p></Paper>

          
      <Paper style={style}className={classes.paper}>
        <Grid style={{  }} container wrap="nowrap" spacing={2}>
         
          <Grid item xs>
            <Typography><h3  style={{ fontSize: '20px', color: '#212121' , width:'240px',  textAlign:"center", marginLeft:'0px', marginTop:'30px', marginBottom:'40px'}}><WorkIcon/>WORK EXPERIENCE
</h3>

<h4  style={{  marginLeft:'40px',fontSize: '15px', color: 'black' }}>Berkshire Software Design - Berkshire
</h4>
            <p style={{ marginTop:'10px', marginLeft:'40px',fontSize: '12px', color: "black" }}>
            SOFTWARE ENGINEER May 2010 

            </p>
            <p style={{  marginLeft:'40px',fontSize: '12px', color: "black" }}>Gained valuable technical experience and also developed personal
effectiveness within a corporate environment, along with an
understanding of the companies core business activities. </p>
            <h4 style={{ marginTop:'10px', marginLeft:'40px',fontSize: '15px', color: "black" }}>
              
            Duties:
            </h4>

            
            <p style={{marginTop:'10px', marginLeft:'40px',fontSize: '12px', color: "black" }}>Worked on open source development projects.
            Writing C++ Linux applications to simulate graphic hardware.

Involved in providing feedback and support to design teams in
order to improve the devising of models.
Working closely with driver code.
Gaining knowledge of OpenGL & OpenGL ES.</p>
            
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper style={style}className={classes.paper}>
        <Grid  container wrap="nowrap" spacing={2}>
          
          <Grid style={{marginBottom:'40px'}}item xs>


            <h3 style={{ fontSize: '25px',margin:'5px', color: '#212121', width:'190px',  textAlign:"center", marginLeft:'0px', marginTop:'30px', marginBottom:'40px' }}>
            <LocalLibraryIcon/>REFERENCES
            </h3>
            <p style={{ marginLeft:'40px',fontSize: '18px',marginTop:'10px', color: "black" }}>
            Mr. K. M. Siobo 
            </p>
            <p style={{ marginLeft:'40px',fontSize: '18px', color: "black" }}>
Department of Education (Principal Tshilala Secondary School) 
 </p>
            <p style={{ marginLeft:'40px',fontSize: '18px', color: "black" }}>
            Cell:    082 755 6180
            </p>
           
            
            <p style={{marginLeft:'40px', fontSize: '18px',marginTop:'30px', color: "black" }}>Mr  Muleya G
 </p>
            <p style={{ marginLeft:'40px',fontSize: '18px',color: "black" }}>
            Family member

            </p>
            <p style={{ marginLeft:'40px',fontSize: '18px', color: "black" }}>
            Cell:071 610 1254
            </p>
            <p style={{marginLeft:'40px', fontSize: '18px',marginTop:'10px', color: "black" }}>
              Email : Gerru1000@gmail.com{' '}
            </p>
 
          </Grid>
        </Grid>
      </Paper>

        </Grid>
      
      </Grid>
    </div>
  );
}
