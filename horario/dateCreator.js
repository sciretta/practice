exports.currentDate = function(){
  return (new Date()).toString().substring(0,15);
}

exports.tomorrowDate = function(){
  return (new Date((new Date).getTime()+24*60*60*1000)).toString().substring(0,15);
}

exports.yesterdayDate = function(){
  return (new Date((new Date).getTime()-24*60*60*1000)).toString().substring(0,15);
}

exports.yearDay = function(){
  const day = Math.ceil((new Date()-new Date((new Date).getFullYear(),0,0))/(1000*60*60*24));
  const year = new Date().getFullYear()
  return [day,year]
}
