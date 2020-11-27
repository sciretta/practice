import Admin from '../../../layouts/Admin'
import User from '../../../components/Users'
import { useRouter } from 'next/router'

import {usersData} from '../../../AuxiliarData'

const buscador=(users,id)=>{
  for(let user of users){
  	if(user.id===parseInt(id)){
  		return {
  			name:user.name,
  			info:[
  			  {title:'Mail',value:user.mail},
  			  {title:'Register type',value:user.type},
  			  {title:'Register date',value:user.date},
  			  {title:'Rol',value:user.rol}
  			],
  			stats:{
  				bids:user.bids,
  				posts:user.posts,
  				earned:user.earned,
  				paid:user.paid
  			}
  		}
  	}
  }
}


export default function UsersId() {
	//data auxiliar
	const [dataFiltrada,setDataFiltrada]=React.useState({
		name:'',
		info:[
		  {title:'',value:''}
		],
		stats:{}
	})
  const {query:{id}} = useRouter()
  
  React.useEffect(()=>{
		setDataFiltrada(buscador(usersData,id))
  },[])
	
  return (
    <Admin back backPath="/users">
      <User data={dataFiltrada}/>
    </Admin>
  )
}
