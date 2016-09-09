function konversiWaktu(value){
  var jam = ""
  var menit = ""
  if(value%60>0){
      jam = Math.floor(value/60)
      menit = value%60
      console.log(`${jam}:${menit}`);
  }
}
konversiWaktu(84)
