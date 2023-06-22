//function ctoc() {
//let celcius = document.getElementById('cls')

//}

function ctof(event) {
    event.preventDefault();

    var inputCelcius = document.getElementById("cels").value;
    var fh = inputCelcius * (9 / 5) + 32;
    document.getElementById("fahr").value = fh + "°F" ;
    document.getElementById("how").value = inputCelcius + " * (9 / 5) + 32 = " + fh +"°F";
}

function reset(w) {
    w.preventDefault();

    document.getElementById("fahr").value = "0";
    document.getElementById("cels").value = "0"; 
    if (document.getElementById("cels").value === 0) {
 
        document.getElementById("how").value = " (0) * (9 / 5) + 32 = "+fh ;
    }
    else {
        document.getElementById("how").value = cels + " * (9 / 5) + 32 = "+fh ;
    }
}
function reverse() {
   var fhs = document.getElementById("cels").value;
    var x = document.getElementById("ket");
    var d = document.getElementById("fh");
    var p = document.getElementById("cld");
    var cls = (fhs - 32) * 5 / 9;
    if(x.innerHTML === "Masukan suhu derajat Celcius (&deg;C) ke kotak Dibawah, lalu klik tombol konversi untuk mendapatkan hasil Konversi kedalam bentuk Fahrenheit (&deg;F)") {
      x.innerHTML = "Masukan suhu derajat Fahrenheit (&deg;F) ke kotak Dibawah, lalu klik tombol konversi untuk mendapatkan hasil Konversi kedalam bentuk Celcius (&deg;C)";
    }else{
        x.innerHTML = "Masukan suhu derajat Celcius (&deg;C) ke kotak Dibawah, lalu klik tombol konversi untuk mendapatkan hasil Konversi kedalam bentuk Fahrenheit (&deg;F)";
    }
      
      d.innerHTML = "Celcius (&deg;C):";
      p.innerHTML = "Fahrenheit (&deg;F):";

    document.getElementById("fahr").value = cls;
     
    if (document.getElementById("cels").value === 0) {
    document.getElementById("how").value = " (0) * (9 / 5) + 32 = "+cls ;
    }
    else {
        document.getElementById("how").value = fhs + " * (9 / 5) + 32 = "+cls ;
    }
}