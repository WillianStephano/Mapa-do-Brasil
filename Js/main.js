mapaBR = document.querySelector('.img_mapa_geral')
colecaoEstados = mapaBR.getElementsByTagName('path')

for (let i = 0; i < colecaoEstados.length; i++) {
   const estado = colecaoEstados[i];
   
   estado.addEventListener('click' ,function () {
      var uf = estado.id
      var ufFormatado = uf.slice(3)
      
      API(ufFormatado)   
   })
   
}


const API = (uf) =>{
   const url = `https://brasilapi.com.br/api/ibge/uf/v1/${uf}`
   fetch(url).then(responde =>responde.json()).then(console.log);
   
   console.log(uf.nome);
}




/* 
Codigo feito desta forma temporaria pois por algum motivo desconhecido
nao consegui trabalhar com funções separadas e chamando elas conforme a necessidade.
*/







