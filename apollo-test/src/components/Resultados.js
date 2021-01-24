import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'

export default function Resultados ({data}) {

	const handleClick = (url) => {
    window.open(url, '_blank')
	}

  return (
    <>
      <GridList cellHeight={300} spacing={0} cols={2}>
	      {data && data.images.map(image => (
	        <GridListTile key={image.webformatURL} cols={1}>
	          <Card style={{borderRadius:0}}>
					    <CardActionArea onClick={()=>handleClick(image.webformatURL)}>
					      <CardMedia
					        height={300}
					        component="img"
					        alt={image.tags}
					        image={image.webformatURL}
					      />
					    </CardActionArea>
					  </Card>
	        </GridListTile>
	      ))}
      </GridList>
    </>
  )
}