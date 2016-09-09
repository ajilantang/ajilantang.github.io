function formatHuruf(kata){
  var tempt = []
  var x =""//bucket
  var gede = kata.toUpperCase()
  var kecil = kata.toLowerCase()
  for (var i = 0; i < kata.length; i++) {
    if (kata.charAt(i)==gede.charAt(i)) {
      tempt.push(gede.charAt(i).toLowerCase())
      // console.log(tempt[i]);--checkArray
    }else {
      tempt.push(gede.charAt(i).toUpperCase())
      // console.log(tempt[i]);-->cekArray
    }
  }
  var z = tempt.toString()//sorting index string
  for (var j = 0; j < z.length; j++) {
    if (j%2==0) {//eliminate (",")
    x+=z.charAt(j)//result
    }
  }
  console.log(x);//output
  // console.log(tempt);-->cek array
}
formatHuruf("JaskDjKDnK")
