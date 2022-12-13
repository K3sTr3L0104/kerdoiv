function elsovalasz() {
    var userValasz = document.getElementById("valastEgy").value;
    var leaderValasz = "Aatrox";
    if (userValasz == leaderValasz) {
    document.getElementById("ide_irj").innerHTML = "Gratulálunk! Kitaláltad a karaktert! Mehetsz a következő kérdésre:)";
    }
    else {
    document.getElementById("ide_irj").innerHTML = "Sajnálom, a válasz nem helyes. Próbáld újra!";
    }
    return false
}
function masodikValasz() {
    var userValasz1 = document.getElementById("valaszKetto").value;
    var leaderValasz1 = "Fizz";
    if (userValasz1 == leaderValasz1) {
    document.getElementById("ValaszMegjelenites").innerHTML = "Gratulálunk! Kitaláltad a karaktert! Mehetsz a következő kérdésre:)";
    }
    else {
    document.getElementById("ValaszMegjelenites").innerHTML = "Sajnálom, a válasz nem helyes. Próbáld újra!";
    }
    return false
}