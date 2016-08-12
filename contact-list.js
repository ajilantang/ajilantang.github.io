var marley = {
    nama: "Marley",
    email: "marley@gan.com",
    telepon: "20162828"

};

var udin = {
    nama: "Udin",
    email: "udin.@codecade.com",
    telepon: "77883823"

};
//array kontak//
var kontak = [marley, udin];
//fungsi log kontak//
function printPerson(person) {
    console.log(person.nama + " " + person.email + " "+ person.telepon+ " ");
}
//fungsi_list//
function listKontak() {
	var kontakLength = kontak.length;
	for (var i = 0; i < kontakLength; i++) {
		printPerson(kontak[i]);
	}
}
//carikontak//
function cariKontak(nama) {
    var kontakLength = kontak.length;
    for (var i = 0; i < kontakLength; i++) {
        if (nama === kontak[i].nama) {
            printPerson(kontak[i]);
        };
    };
};
cariKontak("Marley");
//tambahkontak//
function tambahKontak(nama, email, telepon){
    object = {
        nama: nama,
        email: email,
        telepon: telepon
    };
    kontak[kontak.length] = object;
};
//adding contact//
tambahKontak("aji", "aji@git.com", "123581321");
//listkontak//
listKontak();
