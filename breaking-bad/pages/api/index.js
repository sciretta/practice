const fs =require('fs')

export default (req, res) => {
    let data=[{cont:4,wanted:"jr"},{cont:2,wanted:"white"}] 
    if (req.method === 'POST') {
        
        data=[...data,req.body]
        console.log(data)
        res.end(JSON.stringify(data))
    } else {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(data))
    }
}
