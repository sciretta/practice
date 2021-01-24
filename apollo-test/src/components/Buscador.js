import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Chip from '@material-ui/core/Chip'
import { fade, makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  toolbar:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  blocks:{
    display:'flex',
    margin:5
  }
}))

export default function Buscador({setSearch,search}) {
  const classes = useStyles()

  const handleSearching = () => {
    const inputValue = document.getElementById('search').value
    setSearch(prev => [...prev, inputValue])
  }

  const handleDelete = (tag) => {
    setSearch(prev=>prev.filter(item=>item!==tag))
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{boxShadow:'none'}}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.blocks}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                id="search"
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <button onClick={handleSearching}>buscar</button>
          </div>
          <div className={classes.blocks}>
            {search.map(tag=>{
              if(!tag) return false
              return(
                <Chip
                  label={tag}
                  onDelete={()=>handleDelete(tag)}
                />)
              })
            }
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}