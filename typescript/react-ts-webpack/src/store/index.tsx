import * as React from 'react'
import { useReducer , useContext , createContext , Dispatch } from 'react'

interface IState{
  episodes: any[]
  favorites: any[] 
}

interface IAction{
  type:number
  payload:any //<=======
}

export enum TypeActions{
  FetchData,
  AddFav,
  RemoveFav
}

const initialState: IState = {
  episodes:[],
  favorites:[]
}

const storeContext = createContext<IState>(initialState)
const dispatchContext = createContext<Dispatch<IAction>>(()=>null)

const reducer = ( state:IState, action:IAction):IState=>{
  switch (action.type) {
    case TypeActions.FetchData:
      return {...state , episodes:[...state.episodes,...action.payload]}
      break
    case TypeActions.AddFav:
      return {...state , favorites:[...state.favorites,action.payload]}
      break
    case TypeActions.RemoveFav:
      return {...state , favorites:action.payload}
      break
    default:
      return state
  }
}

const StoreProvider: React.FC<{children:JSX.Element | JSX.Element[]}> = ({children}) =>{
  const [state,dispatch] = useReducer(reducer,initialState)
  
  return (
    <dispatchContext.Provider value={dispatch}>
      <storeContext.Provider value={state}>
        {children}
      </storeContext.Provider>
    </dispatchContext.Provider>
  )
}


export const useStore = () => useContext(storeContext)

export const useDispatch = () => useContext(dispatchContext)

export default StoreProvider
