const { tomorrowDate,yearDay } = require('../dateCreator');

async function loadTomorrow(question,mensaje,main,data){
  const tomorrow = tomorrowDate();
  const cant = await question(mensaje);
  let mananaTask = {date:tomorrow,tasks:[]};
  const [day,year] = yearDay();

  const doc = await data.findOne({date:tomorrow});

  if(doc){
    for(let i=1;i<=cant;i++){
      mananaTask.tasks=[...mananaTask.tasks,{[`Tarea${i}`]:await question(`Ingrese tarea${i}:`)}];
      if(i==cant){
        doc.overwrite({
          date:mananaTask.date,
          tasks:mananaTask.tasks,
          time:0,
          dayId:`${year}${day}`
        });
        await doc.save()
        .then(()=>console.log('\n***Modificado correctamente***\n'))
        .then(()=>main());
      }
    }
  }else{
    for(let i=1;i<=cant;i++){
      mananaTask.tasks=[...mananaTask.tasks,{[`Tarea${i}`]:await question(`Ingrese tarea${i}:`)}];
      if(i==cant){
        const tasks = new data({
          date:mananaTask.date,
          tasks:mananaTask.tasks,
          time:0,
          dayId:`${year}${day}`
        })
        tasks.save()
        .then(()=>console.log('\n***Cargado correctamente***\n'))
        .then(()=>main());
      }
    }
  }
}

module.exports=loadTomorrow;
