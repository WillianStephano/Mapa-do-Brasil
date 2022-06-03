mapaBR = document.querySelector('.img_mapa_geral')

colecaoEstados = mapaBR.getElementsByTagName('path')
for (let i = 0; i < colecaoEstados.length; i++) {
   const estado = colecaoEstados[i];
   
   estado.addEventListener('click' ,function () {
      var uf = estado.id
      var ufFormatado = uf.slice(3)
      limpaMunicipios()
      
      apiEstado(ufFormatado)
      apiMunicipio(ufFormatado)
   })
   
}

const apiEstado = async(uf) =>{
   const urlApiEstado = `https://brasilapi.com.br/api/ibge/uf/v1/${uf}`
   //pego todos o conteudo da promessa que no caso é o conteudo da api e armazena na const dados
   const dados = await fetch(urlApiEstado)
   const estadoSelecionado = await dados.json()
   
   preencheEstado(estadoSelecionado)
}

const apiMunicipio = async(uf) =>{
   const urlApiMunicipio = `https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`
   const dados = await fetch(urlApiMunicipio)
   const municipiosSelecionados = await dados.json()
   
   preencheMunicipio(municipiosSelecionados)
}



function preencheEstado(estadoSelecionado) {
   document.querySelector('.nome_estado ').textContent = `Nome: ${estadoSelecionado.nome}`
   document.querySelector('.sigla_estado').textContent = `Sigla: ${estadoSelecionado.sigla}`
   document.querySelector('.regiao_estado').textContent = `Regiao: ${estadoSelecionado.regiao.nome}`
}


function preencheMunicipio(municipiosSelecionados) {
   var divMunicipios = document.querySelector('.municipios')
   for (let i = 0; i < municipiosSelecionados.length; i++) {
      
      var tagLi = document.createElement('li')
      tagLi.classList.add('item_municipios')
      divMunicipios.appendChild(tagLi)
      tagLi.textContent = municipiosSelecionados[i].nome
   }
}

function limpaMunicipios() {
   var divMunicipios = document.querySelector('.municipios')
   
   while (divMunicipios.hasChildNodes()) {
      divMunicipios.removeChild(divMunicipios.firstChild);
   }
   
}

var tutorial = document.querySelector('.tutorial')
tutorial.addEventListener('click', function () {
   tutorial.classList.toggle('remove')
})


/* R "await" faz o codigo esperar uma resposta da promessa para entao dar continuidade
ou seja espera q o fech faça a requisição no servidodor dos "dados" 
*/