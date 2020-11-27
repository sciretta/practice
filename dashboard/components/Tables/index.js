import CustomizedTables from './CustomizedTables'
import TableHeader from './TableHeader'

export default function Table(props){
	return(
		<>
			<TableHeader title={props.title}/>
	    <CustomizedTables {...props}/>
    </>
	)
}