import { useRouter } from 'next/router'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'

import Stat from '../Utils/Stat'
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
  info:{
  	marginLeft:20
  },
  divider:{
  	[theme.breakpoints.up('sm')]: {
      borderRight:'1px solid lightgrey'
    },
    [theme.breakpoints.down('xs')]: {
      borderBottom:'1px solid lightgrey'
    }
  },
  button:{//estilos de boton globales
  	borderRadius:20,
  	backgroundColor:theme.palette.background.first,
  	marginTop:15,
  	width:150,
  	padding:'10px 40x',
  	color:'white'
  }
}))


export default function User(props){
	const classes = useStyles()
	const {query:{id,username}} = useRouter()
	console.log(props.data)

	return(
		<Grid container>
			<Grid item sm={12} md={12} lg={12}>
			  <Typography variant="h2" className={classes.title}>{props.data.name}</Typography>{/*nombre del usuario*/}
			</Grid>
			<Grid item container justify="space-between" sm={12} md={12} lg={12}>
			  <Grid item container 
			    sm={6} md={6} lg={6} 
			    justify="flex-start" 
			    alignItems="flex-start"
			    className={classes.divider}
			    >
			    <Grid item>
			    	<Avatar variant="square" className={classes.foto}>
						  Foto
						</Avatar>
			    </Grid>
			    <Grid item className={classes.info}>
			      {
			      	props.data.info.map(info=><Info key={info.value} title={info.title} value={info.value}/>)
			      }
			    </Grid>
			  </Grid>
			  <Grid item container sm={6} md={6} lg={6} justify="center" alignItems="flex-start">
			    <Grid item>
			    	<Stat type="Total Bids" value={props.data.stats.bids} unit="Bids"/>
			    </Grid>
			    <Grid item>
			    	<Stat type="Total posts" value={props.data.stats.posts} unit="Posts"/>
			    </Grid>
			    <Grid item>
			    	<Stat type="Total earned" value={props.data.stats.earned} unit="CAD"/>
			    </Grid>
			    <Grid item>
			    	<Stat type="Total paid" value={props.data.stats.paid} unit="CAD"/>
			    </Grid>
			  </Grid>
			</Grid>
			<Grid container justify="center">
				<Button variant="contained" className={classes.button} disableElevation>
				  Edit info
				</Button>
			</Grid>
    </Grid>
	)
}
