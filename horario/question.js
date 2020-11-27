const readline = require('readline');
const { promisify } = require('util');

const rl=readline.createInterface(process.stdin,process.stdout);
rl.question[promisify.custom]=(arg)=>{
  return new Promise((resolve)=>{
    rl.question(arg,resolve);
  });
}

module.exports=rl;