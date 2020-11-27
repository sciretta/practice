import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'

import Info from '../Utils/Info'

const useStyles = makeStyles((theme) => ({
	title:{
  	fontWeight:'bold',
  	color:theme.palette.background.first,
  	marginBottom:10
  },
  foto:{
  	height:150,
  	width:150
  },
  button:{//estilos de boton globales
  	borderRadius:20,
  	backgroundColor:theme.palette.background.first,
  	marginTop:15,
  	width:150,
  	padding:'10px 40x',
  	color:'white',
  	margin:'0 10px'
  },
  fotoWrapper:{
  	[theme.breakpoints.down('sm')]: {
      justifyContent:'center',
      marginBottom:10
    }
  }
}))

export default function Service(props){
  const classes = useStyles()
  console.log(props.data)
	return(
		<Grid container>
			<Grid item sm={12} md={12} lg={12} >
			  <Typography variant="h2" className={classes.title}>Job Title</Typography>{/*nombre del servicio*/}
			</Grid>
			<Grid item container sm={12} md={12} lg={12}>
		    <Grid item container sm={3} md={3} lg={3} className={classes.fotoWrapper}>
		    	<Avatar variant="square" className={classes.foto}>
					  Foto
					</Avatar>
		    </Grid>
		    <Grid item container sm={9} md={9} lg={9}>
	      	{
		      	props.data.info.map(info=><Info key={info.value} title={info.title} value={info.value}/>)
		      }
		    </Grid>
			</Grid>
			<Grid container justify="center">
				<Button variant="contained" className={classes.button} disableElevation>
				  Edit info
				</Button>
				<Button variant="contained" className={classes.button} disableElevation>
				  Delete job
				</Button>
			</Grid>
    </Grid>
	)
}