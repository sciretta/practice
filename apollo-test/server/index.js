import { ApolloServer, gql } from 'apollo-server'
import fetch from 'node-fetch'

const typeDefs = gql`
  type Image{
    webformatURL:String!
    tags:String!
  }
  type Query{
    images(category:[String],page:Int):[Image]
  }
`

const BaseURL = (page = 1, querys = ['dogs']) => {
  const q = querys.reduce((acc, curr) => `${acc}+${curr}`)

  return `https://pixabay.com/api/?key=19299445-56021c6a2c47f6f32c0dd5714&page=${page}&q=${q}`
}

const resolvers = {
  Query: {
    images: (_, { category, page }) => {
      const url = BaseURL( page , category)
      console.log(url)
      return fetch(url).then(res => res.json()).then(res => res.hits)
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({url})=>console.log(`Apollo server ready on port ${url}`))

// import { ApolloServer, gql } from 'apollo-server'
// import fetch from 'node-fetch'

// const episodesURL = `https://rickandmortyapi.com/api/episode`
// const charactersURL = `https://rickandmortyapi.com/api/character`

// const typeDefs = gql`
//   type Character{
//     id: ID
//     name: String
//     gender: String
//     status: String
//     episode: [Episode]
//   }

//   type Episode{
//     id: ID
//     name: String
//     characters: [Character]
//   }

//   type Query{
//     characters:[Character]
//     episodes:[Episode]
//   }
// `

// const splitingUrls = urls => urls.map(url=>url.split('/')[url.split('/').length-1])

// const fetchEachElement = (elements,baseURL) => {
//   const ids = splitingUrls(elements)

//   return fetch(`${baseURL}/${ids}`)
//   .then(res=>res.json())
//   .then(res=>Array.isArray(res)?res:[res])
// }

// const resolvers = {
//   Query:{
//     episodes: ()=>fetch(episodesURL)
//       .then(res=>res.json())
//       .then(res=>res.results)
//     ,
//     characters: ()=>fetch(charactersURL)
//       .then(res=>res.json())
//       .then(res=>res.results)
//   },
//   Episode:{
//     characters(parent){
//       return fetchEachElement(parent.characters,charactersURL)
//     }
//   },
//   Character:{
//     episode(parent){
//       return fetchEachElement(parent.episode,episodesURL)
//     }
//   }
// }

// const server = new ApolloServer({ typeDefs,resolvers })

// server.listen().then(({url})=>console.log(`Apollo server ready on port ${url}`))
