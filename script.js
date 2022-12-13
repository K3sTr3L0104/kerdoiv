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
        var userValasz = document.getElementById("valaszKetto").value;
        var leaderValasz = "Fizz";
        if (userValasz == leaderValasz) {
        document.getElementById("ValaszMegjelenites").innerHTML = "Gratulálunk! Kitaláltad a karaktert! Mehetsz a következő kérdésre:)";
        }
        else {
        document.getElementById("ValaszMegjelenites").innerHTML = "Sajnálom, a válasz nem helyes. Próbáld újra!";
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
function negyedikvalasz() {
    var userValasz = document.getElementById("valaszNegy").value;
    var leaderValasz = "Kha zix";
    if (userValasz == leaderValasz) {
    document.getElementById("ValaszMegjelenites4").innerHTML = "Gratulálunk! Kitaláltad a karaktert! Mehetsz a következő kérdésre:)";
    }
    else {
    document.getElementById("ValaszMegjelenites4").innerHTML = "Sajnálom, a válasz nem helyes. Próbáld újra!";
    }
    return false
}
function otodikvalasz() {
    var userValasz = document.getElementById("valastOt").value;
    var leaderValasz = "Cho'Gath";
    if (userValasz == leaderValasz) {
    document.getElementById("ValaszMegjelenites5").innerHTML = "Gratulálunk! Kitaláltad a karaktert! Mehetsz a következő kérdésre:)";
    }
    else {
    document.getElementById("ValaszMegjelenites5").innerHTML = "Sajnálom, a válasz nem helyes. Próbáld újra!";
    }
    return false
}
function hatodikvalasz() {
    var userValasz = document.getElementById("valaszHat").value;
    var leaderValasz = "Vayne";
    if (userValasz == leaderValasz) {
    document.getElementById("ValaszMegjelenites6").innerHTML = "Gratulálunk! A teszt végére értél!";
    }
    else {
    document.getElementById("ValaszMegjelenites6").innerHTML = "Sajnálom, a válasz nem helyes. Próbáld újra!";
    }
    return false
}