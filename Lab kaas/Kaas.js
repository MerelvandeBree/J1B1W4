alert("Welkom bij: raad de kaas");

    var kaas = prompt("is de kaas geel?","ja of nee");
    if(kaas == "ja") {
        var gaten = prompt("Zitten er gaten in de kaas?", "ja of nee");
        if(gaten == "ja"){
            var prijs = prompt("Is de kaas balachelijk duur?", "ja of nee");
            if(prijs == "ja") {
                var kaas = "Emmenthaler";
                document.write("de kaas die u bedoelt is: " + kaas);
            }
            else if(prijs == "nee"){
                var kaas = "Leerdammer";
                document.write("de kaas die u bedoelt is: " + kaas);
            }
        }
        else if(gaten == "nee"){
            var steen = prompt("Is de kaas zo hard als steen?", "ja of nee");
            if(steen == "ja"){
                var kaas = "Pamigiano Reggiano";
                document.write("de kaas die u bedoelt is: " + kaas);
            }
            else if(steen == "nee"){
                var kaas = "Goudse kaas";
                document.write("de kaas die u bedoelt is: " + kaas);
            }
        }
    }

    else if (kaas == "nee") {
        var schimmel = prompt("Heeft de kaas blauwe schimmels", "ja of nee");
        if(schimmel == "ja"){
            var korst = prompt("heeft de kaas een korst?", "ja of nee");
            if (korst == "ja") {
                var kaas = "Camembert";
                document.write("de kaas die u bedoelt is: " + kaas);
            }
            else if(korst == "nee") {
                var kaas = "Mozzarellaw";
                document.write("de kaas die u bedoelt is: " + kaas);
            }
        }
        else if(schimmel == "nee") {
            var korst = prompt("heeft de kaas een korst?", "ja of nee");
            if (korst == "ja") {
                var kaas = "Bleu de Rochbaron";
                document.write("de kaas die u bedoelt is: " + kaas);
            }
            else if(korst == "nee") {
                var kaas = "Foume d'Ambert";
                document.write("de kaas die u bedoelt is: " + kaas);
            }
        }

    }