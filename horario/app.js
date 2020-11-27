const rl = require('./question');
const { promisify } = require('util');
const question=promisify(rl.question);
const mongoose=require('./mongoDB/connectionDB');
const data=require('./mongoDB/dataSchema');

const {mainM,tomorrowM,loadStatsM,separador} = require('./modulos/mensajes');
const loadTomorrow = require('./modulos/loadTomorrow');
const showToday = require('./modulos/showToday');
const loadStats = require('./modulos/loadStats');
const allStats = require('./modulos/allStats');

async function main(){
  showToday(data);
  const res=await question(mainM);
  switch(res.trim()){
    case '1':
      rl.pause();
      loadTomorrow(question,tomorrowM,main,data);
    break;
    case '2':
      rl.pause();
      loadStats(question,main,loadStatsM,data);
    break;
    case '3':
      allStats(main,data,separador);
    break;
    case '4':
      mongoose.connection.close();
      rl.close();
    break;
    default:
      main();
  }
}
main();
