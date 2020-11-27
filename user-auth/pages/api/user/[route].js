import { 
	registerUser,
	loginUser,
	deleteUser,
  validToken,
  getData,
	getUsers,
} from '../../../server/controllers/Users'

export default async (req, res) => {
	const { method,body,query:{route} } = req
  
  switch(route){
  	case 'register':
  	  if(method==='POST')
  	  	return registerUser(body,res)
  	  else
  	  	res.status(400).json({success:false})
  	  break
  	case 'login':
  	  if(method==='POST')
  	  	return loginUser(body,res)
  	  else
  	  	res.status(400).json({success:false})
  	  break
  	case 'delete':
  	  if(method==='POST')
  	  	return deleteUser(req,res)
  	  else
  	  	res.status(400).json({success:false})
  	  break
    case 'tokenIsValid':
      if(method==='POST')
        return validToken(req,res)
      else
        res.status(400).json({success:false})
      break
    case 'data':
      if(method==='POST')
        return getData(req,res)
      else
        res.status(400).json({success:false})
      break
  	default:
  	  res.status(400).json({error:'Invalid route.'})
  }
}