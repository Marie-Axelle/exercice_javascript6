function calcul(){
  var premier_nombre = document.getElementById('premier_nombre').value;
  var deuxieme_nombre = document.getElementById('deuxieme_nombre').value;
  var result = parseInt(premier_nombre) % (deuxieme_nombre);
  alert(result);
  
}
