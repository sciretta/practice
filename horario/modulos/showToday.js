const { currentDate } = require('../dateCreator');

async function showToday(data){
  const today = currentDate();

  const find = await data.findOne({date:today})
  .then(res=>{
    console.log(`---Tareas de hoy ||${today}||---`);
    return res;
  });

  if(find){
    find.tasks.map(item=>console.log(`${Object.keys(item)}:${Object.values(item)}`));
    console.log("-------------------------------\n");
  }else{
    console.log('Ninguna');
    console.log("-------------------------------\n");
  }
}

module.exports=showToday;
