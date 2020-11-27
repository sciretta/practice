import Admin from '../../../layouts/Admin'
import Table from '../../../components/Tables'

import {servicesData,servicesHead} from '../../../AuxiliarData'

export default function Services() {
  //funciones para manejar data auxiliar
	const dataFiltrada=servicesData.map(({id,job,category,city,province,date})=>({
		id,job,category,city,province,date
	}))
  return (
    <Admin>
      <Table content={dataFiltrada} columns={servicesHead} title={"Services"}/>
    </Admin>
  )
}
