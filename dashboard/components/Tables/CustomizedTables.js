import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'

import EditIcon from '@material-ui/icons/Edit'
import CreditCardIcon from '@material-ui/icons/CreditCard'

import { useRouter } from 'next/router'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.background.first,
    fontWeight:'bold',
    fontSize:20
  },
  body: {
    fontSize: 18,
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.fourth,
    },
  },
}))(TableRow)

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
})

export default function CustomizedTables({content,columns}) {
  const classes = useStyles()
  const {asPath,replace} = useRouter()

  const handleRedirect = id => {
    replace(asPath+'/'+id)
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {columns.map(column=>(
              <StyledTableCell key={column}>{column}</StyledTableCell>  
            ))}
            <StyledTableCell/>
          </TableRow>
        </TableHead>
        <TableBody>
          {content.map(row => (
            <StyledTableRow key={row.id}>
              {Object.values(row).map(value=>
                <StyledTableCell align="left" key={row.id+value}>
                  {value}
                </StyledTableCell>
              )}
              <StyledTableCell align="left">
                <IconButton onClick={()=>handleRedirect(row.id)}aria-label="edit">
                  {row.status?(row.status==='paid'?<></>:<CreditCardIcon/>):<EditIcon/>}
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

