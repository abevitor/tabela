function calcular() {

  var txtv = document.querySelector('input#txtvel')
  var res = document.querySelector('div#res')
  var vel = Number(txtv.value)
 res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} km</strong> </p>`
 if (vel > 60) {
res.innerHTML += `<p>voce esta <strong>MULTADO</strong> por excesso de velocidade</p>`
 }else 
 res.innerHTML += `<p>esta na velocidade permitida</p>`

}