const {app,router} = require('./express.config');
require('./models/connection_db');
const player = require('./models/player');
const team = require('./models/team');

//Metodos GET de player y team
router.get('/players',(req,res)=>{
  let filtro = req.query
  if(req.query.edad){
    filtro = {
      edad:{$gt:req.query.edad}
    }
  }
  player.find(filtro)
  .then(players=>{
    res.json({
      confirmation:'success',
      data:players
    });
  })
  .catch(err=>{
    res.json({
      confirmation:'fail',
      message:err.message
    });
  })
})


router.get('/teams',(req,res)=>{
  team.find(req.query)
  .then(teams=>{
    res.json({
      confirmation:'success',
      data:teams
    })
  })
  .catch(err=>{
    res.json({
      confirmation:'fail',
      message:err.message
    });
  })
})

router.get('/players/:id',(req,res)=>{
  const id = req.params.id;
  player.findById(id)
  .then(player=>{
    res.json({
      confirmation:'success',
      data:player
    });
  })
  .catch(err=>{
    res.json({
      confirmation:'fail',
      message:err.message
    });
  })
})

router.get('/teams/:id',(req,res)=>{
  const id = req.params.id;
  team.findById(id)
  .then(team=>{
    res.json({
      confirmation:'success',
      data:team
    });
  })
  .catch(err=>{
    res.json({
      confirmation:'fail',
      message:err.message
    });
  })
})

//Metodos POST de player y team
router.post('/players',async(req,res)=>{
  const jugadores = await player.find({equipo:req.body.equipo})
  .then(res=>res.length+1)

  await team.findOneAndUpdate({nombre:req.body.equipo},{jugadores:jugadores})

  player.create(req.body)
  .then(player=>{
    res.json({
      confirmation:'success',
      data:player
    })
  })
  .catch(err=>{
    res.json({
      confirmation:'fail',
      message:err.message
    })
  })
})

router.post('/teams',async (req,res)=>{
  const jugadores = await player.find({equipo:req.body.nombre})
  .then(res=>res.length)

  team.create({
    ...req.body,
    jugadores
  })
  .then(team=>{
    res.json({
      confirmation:'success',
      data:team
    })
  })
  .catch(err=>{
    res.json({
      confirmation:'fail',
      message:err.message
    })
  })
})

//Metodos DELETE  de player y team
router.post('/delete/team',(req,res)=>{
  team.findOneAndRemove(req.body)
  .then(()=>res.send('Removed'))
})

router.post('/delete/player',async(req,res)=>{
  const jugadores = await player.find({equipo:req.body.equipo})
  .then(res=>res.length-1)

  await team.findOneAndUpdate({nombre:req.body.equipo},{jugadores:jugadores})

  player.findOneAndRemove(req.body)
  .then(()=>res.send('Removed'))
})

app.use('/api',router);
