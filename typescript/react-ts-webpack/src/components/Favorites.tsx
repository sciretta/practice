import * as React from "react"
import {Link} from "react-router-dom"
import { useStore , useDispatch , TypeActions } from "../store/index"
import { episodeMapper , IEpisode } from "./Utils"

const Favorites = (): JSX.Element => {
	const store = useStore()
  const dispatch = useDispatch()

	const removeFavAction = (episode:IEpisode) => {
    const newFavs:any[] = store.favorites.filter(ep=>ep!==episode)
    dispatch({
      type:TypeActions.RemoveFav,
      payload:newFavs
    })
  }
  return (
  	<>
  	  <Link to="/">
	  	  <button>Home</button>
		  </Link>
		  <div>favorites:{episodeMapper(store.favorites,removeFavAction,true)}</div>
  	</>
  )
}

export default Favorites