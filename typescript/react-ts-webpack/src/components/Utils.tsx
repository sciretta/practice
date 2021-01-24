import * as React from "react"

export const URL = (page:number):Promise<any[]> => new Promise((resolve)=>{
  let arr:string[] = []
  for(let i=page;i<page+10;i++){
    arr = [...arr,i.toString()]
  }
  const URI = 'https://rickandmortyapi.com/api/episode/' + arr
  resolve([URI])
})
  // const params:string[] = arr.map(item=>item.toString)
  // console.log('https://rickandmortyapi.com/api/episode/',params)
  //   // return `https://rickandmortyapi.com/api/episode/${arr}`


export interface IEpisode{
  id:number
  name:string
  air_date:string
  episode:string
}

export const episodeMapper = (episodes:IEpisode[],action:(episode:IEpisode)=>any,fav?:boolean):JSX.Element[] => {
  return episodes.map((episode:IEpisode) => (
    <div key={episode.id}>
      <span>{episode.name} {episode.episode},</span>
      <span>on air: {episode.air_date}</span> 
      <button onClick={()=>action(episode)}>{fav?'remove':'favorites'}</button>
    </div>
  ))
}