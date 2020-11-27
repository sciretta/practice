import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  title:{
  	fontWeight:'bold',
  	color:'darkblue',
  	marginBottom:10
  },
  search:{
  	minWidth:100,
  	maxWidth:200
  },
  entries:{
  	minWidth:60,
  	maxWidth:150
  },
  container:{
  	marginBottom:15
  }
}))


export default function TablesHeader({title}){
	const classes = useStyles()
  const [value, setValue] = React.useState(10)

	const handleChange = (event) => {
		if(event.target.value>0 && event.target.value<100){
			setValue(event.target.value) 
		}else{
			setValue(10)
		}
  }

	return(
		<Grid container justify="space-between" className={classes.container}>
			<Grid item container xs={4} sm={4} md={4} lg={4} xl={4} direction="column">
				<Typography variant="h2" className={classes.title}>
					{title}
				</Typography>
				<TextField
				  className={classes.entries}
	        id="outlined-number"
	        label="Show entries"
	        type="number"
	        InputLabelProps={{
	          shrink: true
	        }}
	        value={value}
	        onChange={handleChange}
	        variant="outlined"
	      />
			</Grid>
			<Grid item container alignItems="flex-end" justify="flex-end" xs={3} sm={3} md={3} lg={3} xl={3}>
				<TextField className={classes.search} id="filled-search" label="Search" type="search" variant="filled" />
			</Grid>
		</Grid>
	)
}
