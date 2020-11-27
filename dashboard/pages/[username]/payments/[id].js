import Admin from '../../../layouts/Admin'
import Payment from '../../../components/Payments'

import {paymentsData,usersData,servicesData} from '../../../AuxiliarData'
import { useRouter } from 'next/router'

const buscador=(payments,users,services,id)=>{
  for(let payment of payments){
  	if(payment.id===parseInt(id)){
  		for(let user of users){
  			if(user.id===payment.userId){
          for(let service of services){
		  			if(service.payId===parseInt(id)){
		          return {
				  			user:[
				  			  {title:'Job date',value:service.date},
									{title:'Mail',value:user.mail},
				  			  {title:'Register type',value:user.type},
				  			  {title:'Register date',value:user.date},
				  			  {title:'Rol',value:user.rol},
				  			  {title:'Card',value:payment.card},
				  			  {title:'Bank',value:payment.bank},
				  			  {title:'Amount',value:payment.amount}
								],
								service:[
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
  		}
  	}
  }
}

export default function PaymentsId() {
	//data auxiliar
	const [dataFiltrada,setDataFiltrada]=React.useState({
		user:[{title:'',value:''}],
		service:[{title:'',value:''}]
	})
  const {query:{id}} = useRouter()
  
  React.useEffect(()=>{
		setDataFiltrada(buscador(paymentsData,usersData,servicesData,id))
  },[])

  return (
    <Admin back backPath="/payments">
      <Payment data={dataFiltrada}/>
    </Admin>
  )
}
	
