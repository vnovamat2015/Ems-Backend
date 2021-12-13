let coordenadasBairro = document.querySelector('#coordenadas');
let bairroEscolhido = document.querySelector('#bairro')

let list = []
const bairro = document.getElementById('bairro');
const horaInicio = document.getElementById("start");
const horaFim = document.getElementById("end");
const dates = document.getElementById("dates");
        
    bairroEscolhido.addEventListener('click', function(){
        bairros.forEach(bairro => {
            if(bairro['bairro'] == bairroEscolhido.value){
                coordenadasBairro.textContent =  bairro['coordenadas']; 
            }
        });
    
    }); 
     
     
     // CARDS: feito no javascript que interagem com HTML
    lugarParaAdicionarOBairro.innerHTML = `Bairro: <strong>${bairro.value}</strong><br/>
    Coordenadas: <strong>${coordenadas.textContent}</strong><br/>
    Data: <strong>${dates.value} </strong><br/>
    Inicio da Chuva: <strong>${horaInicio.value}</strong><br/>
    Término da Chuva: <strong> ${horaFim.value} </strong><br/>
    <button type="button" onclick="editar(
        '${obj.bairro}',
        '${obj.coordenadas.replaceAll("'","aspa maldita")}',
        '${obj.dates}',
        '${obj.horaInicio}',
        '${obj.horaFim}')">    Trocar   </button>`;


/////////////////////////////////////////////////////////////
     