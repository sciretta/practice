import Admin from '../../../layouts/Admin'
import Table from '../../../components/Tables'

import {usersData,usersHead} from '../../../AuxiliarData'

const buscador=(users)=>{
  for(let user of users){
  	if(user.id===parseInt(id)){
  		return {}
  	}
  }
}
const dataFiltrada=usersData.map(({id,name,mail,type,date,rol})=>({id,name,mail,type,date,rol}))
export default function Users() {
  return (
    <Admin>
      <Table content={dataFiltrada} columns={usersHead} title={"Users"}/>
    </Admin>
  )
}
