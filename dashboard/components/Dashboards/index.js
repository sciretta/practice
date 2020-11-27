import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from'@material-ui/core/TextField'

import Stat from '../Utils/Stat'

const useStyles = makeStyles((theme) => ({
	title:{
  	fontWeight:'bold',
  	color:theme.palette.background.first,
  	marginBottom:10
  },
  search:{
  	minWidth:100,
  	maxWidth:200
  }
}))

export default function Dashboard({data}){
  const classes = useStyles()

	return(
		<Grid container direction="column">
			<Grid item container>
			  <Typography variant="h2" className={classes.title}>{data.title}</Typography>{/*nombre del servicio*/}
			</Grid>
			<Grid item container>
				<TextField className={classes.search} id="filled-search" label="Date" type="search" variant="filled" />
			</Grid>
			<Grid item container justify="space-between">
				<Grid item>
			    	<Stat type="Total Bids" value={data.currentBids} unit="Bids"/>
			    </Grid>
			    <Grid item>
			    	<Stat type="Total posts" value={data.transactions} unit="Posts"/>
			    </Grid>
			    <Grid item>
			    	<Stat type="Total earned" value={data.earned} unit="CAD"/>
			    </Grid>
			    <Grid item>
			    	<Stat type="Total paid" value={data.bidsDone} unit="CAD"/>
			    </Grid>
			</Grid>
		</Grid>
	)
}
