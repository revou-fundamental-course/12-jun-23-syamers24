//function ctoc() {
//let celcius = document.getElementById('cls')

//}
function ctof(event) {
    event.preventDefault();

    var inputCelcius = document.getElementById("cels").value;
    var fh = inputCelcius * (9 / 5) + 32;
    document.getElementById("fahr").value = fh;
    document.getElementById("how").value = inputCelcius + " * (9 / 5) + 32 = " +fh;
}
function reset(event) {
    event.preventDefault();

    document.getElementById("fahr").value = "0";
    document.getElementById("cels").value = "0"; 
    document.getElementById("how").value = inputCelcius + " * (9 / 5) + 32 = "+fh ;
}