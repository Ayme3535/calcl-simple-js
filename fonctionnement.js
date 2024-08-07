egale.addEventListener("click",(event)=> {
  let xValue = parseFloat(x.innerHTML);
  let yValue = parseFloat(y.innerHTML);
  if (affichageOperation.innerHTML === '+') {
    (document.getElementById('resultat')).innerHTML =  xValue + yValue ;
  } else if (affichageOperation.innerHTML=== '-') {
    (document.getElementById('resultat')).innerHTML = x.innerHTML - y.innerHTML ;
  } 
     else if (affichageOperation.innerHTML === '*') {
      (document.getElementById('resultat')).innerHTML = x.innerHTML * y.innerHTML ;
    }
      
});

boutonReset.addEventListener('click', function() {
  document.getElementById('nb1').innerHTML = 'X';
  document.getElementById('nb2').innerHTML = 'Y';
  document.getElementById('operation').innerHTML = 'operation';
  document.getElementById('resultat').innerHTML = 'resultat';
  saisieDeuxiemeNombre = false;
});



