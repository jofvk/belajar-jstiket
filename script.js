alert("Aplikasi Tiket")

const nama = prompt("Masukkan Nama")
const umur = prompt("Masukkan Umur")

if (umur >=13) {
    const studio = prompt("Pilih Studio A,B,C").toUpperCase()
    if (studio == "A"){
        alert(`Tiket ${nama}, Studio A Umur ${umur}`)
    }
    else if (studio == "B"){
        alert(`Tiket ${nama}, Studio B Umur ${umur}`)
    }
    else if (studio == "C"){
        alert(`Tiket ${nama}, Studio C Umur ${umur}`)
    }
    else {
        alert(`Pilihan Tidak Valid`)
    }
}

else {
    alert(` ${nama} Tidak Boleh Masuk Studio`)
}