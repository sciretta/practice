import * as React from "react"
import {Link} from "react-router-dom"
import { useStore , useDispatch , TypeActions } from "../store/index"
import { episodeMapper , IEpisode , URL} from "./Utils"

const Home = (): JSX.Element => {
	const store = useStore()
  const dispatch = useDispatch()
  const [currPage,setCurrPage] = React.useState(1)

  const fetchDataAction = async (page:number) => {
    const [URI] = await URL(page)
    const res = await fetch(URI)

    const data:IEpisode[] = await res.json()

    return dispatch({
    	type:TypeActions.FetchData,
    	payload: data
    })
  }

  const addFavAction = (episode:IEpisode) => {
    if(store.favorites.includes(episode)) return false
    dispatch({
      type:TypeActions.AddFav,
      payload:episode
    })
  }

  const masEpisodios = ():void => {
    fetchDataAction(currPage+10)
    setCurrPage(prevPage=>prevPage+10)
  }

	React.useEffect(()=>{
  	store.episodes.length === 0 && fetchDataAction(currPage)
  },[])

  return (
  	<>
	  	<Link to="/favs">
	  	  <button>Favoritos</button>
		  </Link>
		  <div>episodes:{episodeMapper(store.episodes,addFavAction)}</div>
		  <button onClick={masEpisodios}>mas episodios</button>
	  </>
  )
}

export default Home