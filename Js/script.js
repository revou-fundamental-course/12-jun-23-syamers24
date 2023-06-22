//ini adalah fungsi untuk tombol Konversi
function ctof(event) {
    event.preventDefault();

    var inputCelcius = document.getElementById("cels").value;
    var fh = inputCelcius * (9 / 5) + 32;
    document.getElementById("fahr").value = fh + "°F" ;
    document.getElementById("how").value = inputCelcius + " * (9 / 5) + 32 = " + fh +"°F";
    document.getElementById("fh").innerHTML = " <p>Fahrenheit (&deg;F):</p>";
    document.getElementById("cld").innerHTML = " <p>Celcius (&deg;C):</p>";
}

//ini adalah fungsi untuk Tombol Reset
function reset(event) {
   event.preventDefault();

    document.getElementById("fahr").value = "0";
    document.getElementById("cels").value = "0"; 
    if (document.getElementById("cels").value === 0) {
 
        document.getElementById("how").value = " 0 * (9 / 5) + 32 = "+fh ;
    }
    else {
        document.getElementById("how").value = cels + " * (9 / 5) + 32 = "+fh ;
    }
}

//ini adalah fungsi untuk tombol reverse
function reverse(event) {
  event.preventDefault();
   var fhs = document.getElementById("cels").value;
    var cls = (fhs - 32) * 5 / 9;
    document.getElementById("fahr").value = cls+"°c";

    var x = document.getElementById("fh");
    var d = document.getElementById("cld");
    var g = document.getElementById("nhow");
    if (d.innerHTML === "<p>Celcius (&deg;C):</p>") {
      x.innerHTML = "<p>Fahrenheit (&deg;F):</p>";
      d.innerHTML = "<p>Celcius (&deg;C):</p>";

    } else {
      x.innerHTML = " <p>Celcius(&deg;C):</p>";
      d.innerHTML = "<p>Fahrenheit (&deg;F):</p>";
      g.innerHTML ="Fahrenheit (&deg;F) to Celsius (&deg;C):</p>";
    }
    if (document.getElementById("cels").value === 0) {
    document.getElementById("how").value = " 0°f * (9 / 5) + 32 = "+cls+"°c" ;
    }
    else {
        document.getElementById("how").value = fhs + " * (9 / 5) + 32 = "+cls+"°c" ;
    }
    
}
//ini adalah fungsi untuk sidebarNav saat dibuka
function openNav(event) {
  event.preventDefault();
  document.getElementById("fsidebar").style.width = "325px";
  document.getElementById("main").style.marginRight = "450px";
}
//ini adalah Fungsi untuk sidebarNav saat ditutup
function closeNav(event) {
  event.preventDefault();
  document.getElementById("fsidebar").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
}

