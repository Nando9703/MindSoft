var VerSaldo = document.getElementById("Saldo");
VerSaldo.style.visibility = "hidden";
console.log(VerSaldo.style.visibility)
function ocultarSaldo() {
    if (VerSaldo.style.visibility == "hidden") {
        VerSaldo.style.visibility = "visible" 
        console.log(VerSaldo.style.visibility)
        console.log("Aca estoy llegando")
    }else{
        // VerSaldo.style.visibility = "hidden"             
        // console.log("Aca estoy")
    }
}