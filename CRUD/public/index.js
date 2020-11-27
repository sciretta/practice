let columna1 = document.getElementById('column-1');
let columna2 = document.getElementById('column-2');

const playerForm=`<div class="form">
  <input placeholder="nombre" id="nombrePlayer" type="text"/>
  <input placeholder="apellido" id="apellidoPlayer" type="text"/>
  <input placeholder="edad" id="edadPlayer" type="number"/>
  <input placeholder="equipo" id="equipo" type="text"/>
  <input placeholder="posicion" id="posicion" type="text"/>
  <button id="enviarPlayer" onClick="fetchPlayer()">enviar</button>
</div>`
const teamForm=`<div class="form">
  <input placeholder="equipo"id="nombreEquipo" type="text"/>
  <input placeholder="pais"id="pais" type="text"/>
<button id="enviarPlayer" onClick="fetchTeam()">enviar</button>
</div>`

const fetchPlayer = ()=>{
  const nombre = document.getElementById("nombrePlayer").value;
  const apellido = document.getElementById("apellidoPlayer").value;
  const edad = document.getElementById("edadPlayer").value;
  const equipo = document.getElementById("equipo").value;
  const posicion = document.getElementById("posicion").value;
  fetch('http://localhost:4000/api/players', {
    method: 'POST',
    body:JSON.stringify({nombre,apellido,equipo,edad,posicion}),
    headers: { 
      'Content-Type': 'application/json'
    }
  })
  .then(res=>{
    readAndLoad(true,false);
    columna1.innerHTML=playerForm;
    return res;
  })
  .then(res => res.json())
}

const fetchTeam = ()=>{
  const nombre = document.getElementById("nombreEquipo").value;
  const pais = document.getElementById("pais").value;
  fetch('http://localhost:4000/api/teams', {
    method: 'POST',
    body:JSON.stringify({nombre,pais}),
    headers: { 
      'Content-Type': 'application/json'
    }
  })
  .then(res=>{
    readAndLoad(false,true);
    columna2.innerHTML=teamForm;
    return res;
  })
  .then(res => res.json())
}

const readAndLoad = (column1=false,column2=false) =>{
  
  const fetchData = async (url)=>{
    const data = await fetch(url)
    .then(res=>res.json())
    .then(data=>data)
    .catch(err=>console.log(err));
    return data;
  }
  
  if(column1){
    fetchData('http://localhost:4000/api/players')
    .then(res=>res.data)
    .then(data=>data.map(player=>{
      return `
      <div class="cards">
        <span>
          ${player.nombre} ${player.apellido} ${player.equipo}
        </span>
        <button value="${player.nombre}" class="borrar-1">×</button>
      </div>
      `
      })
    )
    .then(html=>html.reduce((acc,curr)=>acc+curr))
    .then(html1=>{
      columna1.innerHTML = html1+columna1.innerHTML;
      const borrar = document.getElementsByClassName("borrar-1");
      for(let i=0;i<borrar.length;i++){
        borrar[i].addEventListener('click',e=>borrarEl(e,'http://localhost:4000/api/delete/player','column-1'));
      }
    })
  }
  
  if(column2){
    fetchData('http://localhost:4000/api/teams')
    .then(res=>res.data)
    .then(data=>data.map(team=>{
      return `
      <div class="cards">
        <span>
          ${team.nombre} jugadores:${team.jugadores}
        </span>
        <button value="${team.nombre}" class="borrar-2">×</button>
      </div>
      `
      })
    )
    .then(html=>html.reduce((acc,curr)=>acc+curr))
    .then(html2=>{
      columna2.innerHTML = html2+columna2.innerHTML;
      const borrar = document.getElementsByClassName("borrar-2");
      for(let i=0;i<borrar.length;i++){
        borrar[i].addEventListener('click',e=>borrarEl(e,'http://localhost:4000/api/delete/team','column-2'));
      }
    })
  }
}

const borrarEl = (e,url,column) =>{
  fetch(url, {
    method: 'POST',
    body:JSON.stringify({nombre:e.target.value}),
    headers: { 
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  if(column==='column-1'){
    document.getElementById('column-1').innerHTML=playerForm;
    readAndLoad(true,false);
  }else if(column==='column-2'){
    document.getElementById('column-2').innerHTML=teamForm;
    readAndLoad(false,true);
  }
}

readAndLoad(true,true);
