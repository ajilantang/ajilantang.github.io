function orderString(value){
  var x = "";//bucket variable
  var karakter = value.split("");//partial string
  var hasilSort = karakter.sort();//sort character from karakter data tyoe array
  var konversi = hasilSort.toString();//convert to string
  for (var i = 0; i < konversi.length; i++) {//sorting index string
    if (i%2==0) {//eliminate (",")
      x+=konversi.charAt(i)//result
    }
  }
  console.log(x);//print output
}
(orderString("anak kucing berenang di empang pak raden"));
