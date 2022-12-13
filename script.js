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


    function masodikvalasz() {
        var userValasz = document.getElementById("valastKetto").value;
        var leaderValasz = "Aatrox";
        if (userValasz == leaderValasz) {
        document.getElementById("ide_irj").innerHTML = "Gratulálunk! Kitaláltad a karaktert! Mehetsz a következő kérdésre:)";
        }
        else {
        document.getElementById("ide_irj").innerHTML = "Sajnálom, a válasz nem helyes. Próbáld újra!";
        }
        return false
    }


        function harmadikvalasz() {
            var userValasz = document.getElementById("valastHarom").value;
            var leaderValasz = "Hecarim";
            if (userValasz == leaderValasz) {
            document.getElementById("valasz3").innerHTML = "Gratulálunk! Kitaláltad a karaktert! Mehetsz a következő kérdésre:)";
            }
            else {
            document.getElementById("valasz3").innerHTML = "Sajnálom, a válasz nem helyes. Próbáld újra!";
            }
            return false
    }