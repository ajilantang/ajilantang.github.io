var pangkatAngka = function (x,y){
  return Math.pow (x,y);
}
var akarKuadrat = function(a) {
  return Math.pow(a,0.5)
}
var hipotenusa = function(p,q) {
  return Math.pow((p*p+q*q),0.5)+"cm"
}
hipotenusa(3,4);
var luaslingkaran = function (r) {
  return Math.PI*r*r +" cm"
}
console.log(akarKuadrat(7));
console.log(pangkatAngka(2,3));
console.log(hipotenusa(2,3));
