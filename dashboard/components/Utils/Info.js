import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  title:{
    fontWeight:'bolder',
  	color:'darkblue',//color global
    fontSize:18
  },
  value:{
  	fontWeight:'400',
    fontSize:15
  },
  container:{
    marginBottom:10,
    maxHeight:100,
    width:'auto',
    minWidth:80,
    margin:'0 10px'
  }
}))

export default function Info({title,value}){
	const classes = useStyles()
  return(
  	<Grid container justify="flex-start" direction="column" className={classes.container}>
	    <Typography variant="h5" className={classes.title}>{title}</Typography>
	    <Typography variant="h6" className={classes.value}>{value}</Typography>
    </Grid>
  )
}