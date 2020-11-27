import Admin from '../../../layouts/Admin'
import Service from '../../../components/Services'
import { useRouter } from 'next/router'

import {servicesData} from '../../../AuxiliarData'

const buscador=(services,id)=>{
  for(let service of services){
  	if(service.id===parseInt(id)){
  		return {
  			name:service.job,
  			info:[
  			  {title:'Job date',value:service.date},
					{title:'Job time',value:service.jobTime},
					{title:'Category',value:service.category},
					{title:'City',value:service.city},
					{title:'Province',value:service.province},
					{title:'Adress',value:service.adress},
					{title:'Postal code',value:service.postal},
					{title:'Unit',value:service.unit},
					{title:'Tools needed',value:service.tools},
					{title:'Description',value:service.description}
				]
  		}
  	}
  }
}

export default function ServicesId() {
	//data auxiliar
	const [dataFiltrada,setDataFiltrada]=React.useState({
		name:'',
		info:[
      {title:'',value:''}
		]
	})
  const {query:{id}} = useRouter()
  
  React.useEffect(()=>{
		setDataFiltrada(buscador(servicesData,id))
  },[])
  return (
    <Admin back backPath="/services">
      <Service data={dataFiltrada}/>
    </Admin>
  )
}
