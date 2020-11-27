const { yearDay } = require('../dateCreator');

async function allStats(main,data,separador){
  const lastWeekAvg = await lastTimeStats(data,7);
  console.log('***Horas por dia ultima semana: ||'+lastWeekAvg.toFixed(2)+'||***\n'+separador);
  const lastMonthAvg = await lastTimeStats(data,30);
  console.log('***Horas por dia ultimo mes: ||'+lastMonthAvg.toFixed(2)+'||***\n'+separador);

  const [day] = yearDay();
  const yearAvg = await lastTimeStats(data,day);
  console.log('***Horas por dia este ano: ||'+yearAvg.toFixed(2)+'||***\n'+separador);

  setTimeout(()=>main(),3000);
}

async function lastTimeStats(data,lapso){
  const [day,year] = yearDay();
  const limite = `${year}${day-lapso}`;
  
  const docs = await data.find({dayId:{$gt:limite}});
  const horasAcc = docs.map(item=>item.time).reduce((acc,current)=>acc+current);
 
  return horasAcc/lapso;
}

module.exports=allStats;