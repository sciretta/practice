const { yesterdayDate,currentDate } = require('../dateCreator');

async function loadStats(question,main,mensaje,data){
  const res=await question(mensaje);
  switch(res.trim()){
    case ('A'):
    case ('a'):
      const yesterday = yesterdayDate();
      const ayerM='Cuantas horas estudiaste ayer?';
      console.log(yesterday)
      load(yesterday,ayerM,question,main,data);
    break;
    case ('B'):
    case ('b'):
      const today = currentDate();
      const hoyM='Cuantas horas estudiaste hoy?';
      load(today,hoyM,question,main,data);
    break;
    default:
      console.log('Opcion incorrecta');
      main();
  }
}

async function load(fecha,message,question,main,data){
  const res=await question(message);
  const doc = await data.findOne({date:fecha});
  if(doc){
    doc.overwrite({
      date:fecha,
      time:res,
      dayId:doc.dayId
    });
    await doc.save()
    .then(()=>console.log('***Horas cargadas correctamente.***'))
    .then(()=>main());
  }else{
    console.log('***No habia tareas pendientes para el dia solicitado.***');
    main();
  }
}

module.exports=loadStats;
