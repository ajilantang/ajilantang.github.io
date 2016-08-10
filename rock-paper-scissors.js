var pilihanPengguna = prompt("pilih salah satu dengan tulis := {telunjuk,jempol, atau kelingking}");
var pilihanLawan = Math.random();
if (pilihanLawan <= 0.33) {
    pilihanLawan = "jempol";
} else if(pilihanLawan <= 0.66) {
    pilihanLawan = "telunjuk";
} else {
    pilihanLawan = "kelingking";
}


var bertarung = function(pilihan1, pilihan2) {
    if(pilihan1 === pilihan2) {
    return "imbang coy,coba lagi!";
}
if(pilihan1 === "jempol") {
    if(pilihan2 === "telunjuk") {
        return "eciye,lu menang";
    } else {
        return "kalah, coba lagi";
    }
}
if(pilihan1 === "telunjuk") {
    if(pilihan2 === "jempol") {
        return "kalah kan, ganti jangan yang itu";
    } else {
        if(pilihan2 === "kelingking") {
            return "dewa judi, menang euy";
    }
}
if(pilihan1 === "kelingking") {
    if(pilihan2 === "jempol") {
        return "anda menang";
    } else {
        if(pilihan2 === "telunjuk") {
            return "maaf kalah, coba lagi lah haha";
        }
    }
}
}
};
console.log("jari yang anda pilih: " + pilihanPengguna);
console.log("lawan anda si komputer pilih: " + pilihanLawan);
console.log(bertarung(pilihanPengguna, pilihanLawan));
