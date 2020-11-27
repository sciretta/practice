import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import Routes from '../routes'
import { useRouter } from 'next/router'
import Head from 'next/head'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: theme.drawer,
      flexShrink: 0,
    }
  },
  appBar: {
    boxShadow:'none',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${theme.drawer}px)`,
      marginLeft: theme.drawer,
    },
  },
  title:{
    flexGrow:1,
    textAlign:'right'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  backButton: {
    marginRight: theme.spacing(2),
    display: 'none'
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: theme.drawer,
    color:theme.palette.background.second,
    fontWeight:'bold'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  icon:{
    color:theme.palette.background.second
  }
}))

function Admin(props) {
  const { window,children,back,backPath } = props
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const {query:{username},replace,asPath} = useRouter()
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleRedirect = path => {
    replace('/'+username+path)
  }

  const drawerContent = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {Routes.map(({path,name,icon}) => (
          <ListItem onClick={()=>handleRedirect(path)} 
            button disabled={'/'+username+path===asPath?true:false} key={path}>
            <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
    </div>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <>
      <Head>
        <title>{username}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="back page"
              edge="start"
              onClick={()=>handleRedirect(backPath)}
              className={back?'':classes.backButton}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap className={classes.title}>
              {username}
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden mdUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawerContent}
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawerContent}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    </>
  )
}

export default Admin