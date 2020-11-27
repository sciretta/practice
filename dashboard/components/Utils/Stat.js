import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  type:{
  	fontWeight:'bolder',
  	color:theme.palette.background.third
  },
  value:{
  	fontWeight:'800',
  	color:theme.palette.background.second
  },
  unit:{
  	fontWeight:'400',
  	color:theme.palette.background.third
  },
  container:{
  	minWidth:180,
  	height:150
  }
}))

export default function Stat({type,value,unit}) {
	const classes = useStyles()
  return (
    <Grid container className={classes.container} direction="column" justify="center" alignItems="center">
    	<Grid item>
    	  <Typography variant="h5" className={classes.type}>
    	    {type}
    	  </Typography>
    	</Grid>
    	<Grid item>
        <Typography variant="h3" className={classes.value}>
    	    {value}
    	  </Typography>
    	</Grid>
    	<Grid item>
        <Typography variant="h6" className={classes.unit}>
    	    {unit}
    	  </Typography>
    	</Grid>
    </Grid>
  )
}