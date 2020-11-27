import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import blueGrey from '@material-ui/core/colors/blueGrey'

const Theme = createMuiTheme({
  palette: {
    background:{
    	first:'#2c387e',
    	second:blue[200],
    	third:blueGrey[900],
    	fourth:blueGrey[100]
    },
    primary:{
    	main:'#2c387e'
    }
  },
  drawer:220
})

export default Theme