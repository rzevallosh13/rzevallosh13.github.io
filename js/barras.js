
$('#graficos').on('click',function(){
	var columnas = document.querySelectorAll("#graficos .columna"); 
  
  for(elem=0; columnas[elem]; elem++) {
    estaCol = columnas[elem]; 
    pinta = ( (parseInt(estaCol.innerHTML) / 100) * estaCol.offsetHeight ).toFixed(0); 
    
    estaCol.style.boxShadow = "inset 0 -"+ pinta +"px 0 0 black"; 
  }
});

