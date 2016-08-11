console.log ("anda akan melempar benda dengan jarak, kecepatan, dan sudut sesuai keinginan anda, bola akan berjalan selama 100s. Ayo buat bola tepat mengenai object dengan jarak objek yang anda isi,maka  silahkan isi jarak,kecepatan dan sudut")
//waktuTempuh 100s
//input jarak yang diinginkan && kecepatan awal ;
var jarakTempuh = prompt ("jarak anda dengan objek ?isi dengan angka");
var sudutLempar = prompt ("sudut Lempar anda ?");
var kecepatanLempar = prompt ("kecepatan Lempar?");
//hitung rumus
var hasilKecepatan = kecepatanLempar * Math.cos(sudutLempar);
//persentasekegagalan
var nilaiGalat = (jarakTempuh - (hasilKecepatan*100))/jarakTempuh;
if (nilaiGalat === 0) {
  console.log("prediksi anda sempurna dengan persentase kegagalan anda "+ nilaiGalat);
} else if (nilaiGalat<= 0.1&&nilaiGalat>0) {
    console.log ("Bagus masih sedikit lagi tepat sasaran dengan persentase kegagalan anda " + nilaiGalat*100 );
} else {
  console.log("terlalu jauh broo atau sudut lempar kebelakang ,kalau gitu mah sampe melenceng kira-kira " + nilaiGalat*100 +" persen");
}
