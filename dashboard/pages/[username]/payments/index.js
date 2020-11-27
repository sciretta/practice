import Admin from '../../../layouts/Admin'
import Table from '../../../components/Tables'

import {paymentsData,usersData,paymentsHead} from '../../../AuxiliarData'


export default function Payments() {
	//funciones para manejar data auxiliar
	const buscadorUser=(users,id)=>{
	  for(let user of users){
	  	if(user.id===id){
	  		return {name:user.name,mail:user.mail}
	  	}
	  }
	}
	const dataFiltrada=paymentsData.map(({id,job,date,status,userId})=>({
		id,...buscadorUser(usersData,userId),job,date,status
	}))

  return (
    <Admin>
      <Table content={dataFiltrada} columns={paymentsHead} title={"Payments"}/>
    </Admin>
  )
}
