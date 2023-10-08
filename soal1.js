function hitungAkar() {
    // Ambil nilai dari input
    var input = document.getElementById("inputNumber").value;

    // Konversi input ke bilangan bulat
    var angka = parseInt(input);

    // Periksa apakah angka negatif
    if (angka < 0) {
        document.getElementById("error").innerHTML = "Tidak bisa input bilangan negatif";
        document.getElementById("hasil").innerHTML = "";
    }
    // Periksa apakah angka ganjil
    else if (angka % 2 !== 0) {
        document.getElementById("error").innerHTML = "Tidak bisa input bilangan ganjil";
        document.getElementById("hasil").innerHTML = "";
    }
    // Jika angka genap dan tidak negatif, hitung akar pangkat 2
    else {
        document.getElementById("error").innerHTML = "";
        var akar = Math.sqrt(angka);
        document.getElementById("hasil").innerHTML = "Akar pangkat 2 dari " + angka + " adalah " + akar;
    }
}
