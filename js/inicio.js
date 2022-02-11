var VerSaldo = document.getElementById("Saldo");
var Num = "1";

function ocultarSaldo() {
    console.log(Num)
    if (Num === "1") {
        VerSaldo.style.display = "none"
        Num = "0";
    }else{
        VerSaldo.style.display = "block"        
        Num = "1";
    }
}