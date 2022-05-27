mapaBR = document.querySelector('.img_mapa_geral')
colecaoEstados = mapaBR.getElementsByTagName('path')

for (let i = 0; i < colecaoEstados.length; i++) {
   const estado = colecaoEstados[i];
   
   estado.addEventListener('click' ,function () {
      console.log(estado);
   })
   
}