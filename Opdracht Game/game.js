alert("Welkom bij dit fantastische spel. Je speelt als Simon de muis.");

var keukenTuin = prompt("Er is een muis, die Simon heet. Deze muis heeft maar een levensdoel, vrienden worden met de kat, Guus. Eerst moet hij Guus vinden. Hij kan in de keuken of in de tuin gaan kijken. Waar ga je eerst zoeken?", "Keuken of tuin");
if (keukenTuin == "keuken"){
	var kist = prompt("Simon loopt de keuken binnen en vindt daar een mes. Hij besluit het mes mee te nemen. Kan altijd nog van pas komen. Guus is niet in de keuken dus loopt de muis verder naar zolder om Guus daar te zoeken. Daar vindt hij een rode en een blauwe kist. Welke kist open je?", "Rood of blauw");
	if (kist == "rood"){
		var zoeken = prompt("In de rode kist vindt Simon kattenbrokjes. Simon besluit ze mee te nemen voor Guus, hij wil tenslotte bevriend met hem raken. Gaat Simon verder op zoek naar nuttige spullen of gaat hij verder Guus zoeken?", "Spullen of Guus");
		if (zoeken == "spullen"){
			alert("Simon besluit verder te zoeken naar nuttige voorwerpen. Na een rondje gelopen te hebben over de zolder, vindt hij vooral oude en verstofte spullen. En hij sterft doordat hij stikt in het stof.");
		}
		else if (zoeken == "guus"){
			alert("Simon besluit om de zolder te verlaten en. op zoek naar Guus te gaan. Wanneer hij beneden is ziet hij de kat op de overloop. Hij rent er achteraan en geeft Guus de kattenbrokjes. Ze worden beste vrienden en leven nog lang en gelukkig.");
		}
	}
	else if (kist == "blauw"){
		alert("In de blauwe kist vindt Simon helemaal niks, hij besluit dan ook om niet verder op zolder te kijken. Dus hij gaat weer naar beneden. Onderweg loopt hij in een muizenval en sterft.");
	}
}
else if (keukenTuin == "tuin"){
	var kuilSchuur = prompt("Simon gaat naar de tuin. Daar ziet hij een grote kuil. Gaat de muis in de kuil zoeken naar Guus de kat, of zoekt Simon verder in de schuur?", "Kuil of schuur");
	if (kuilSchuur == "kuil"){
		var richting = prompt("In de kuil vindt Simon een doorgang. Volg je de doorgang, of ga je weer naar boven?", "Doorgang of boven");
		if (richting == "doorgang"){
			alert("Simon gaat de doorgang in. Het is een hele lange tunnel. De tunnel stort in en Simon sterft.");
		}
		else if (richting == "boven"){
			alert("Na heel veel moeite komt Simon weer boven. Hij is zo moe dat hij besluit om niet meer naar Guus de kat te zoeken.");
		}
	}
	else if (kuilSchuur == "schuur"){
		var renZoek = prompt("Achterin de tuin ziet Simon iets bewegen. Gaat hij er achteraan of zoekt hij verder in de schuur?", "Rennen of zoeken");
		if (renZoek == "rennen"){
			var renLig = prompt("Simon rent als een debiel naar de plek waar de beweging vandaan kwam. Onderweg struikelt hij. Sta je op om verder te rennen of geef je het op en blijf je liggen?", "Rennen of liggen");
			if (renLig == "rennen"){
				alert("De muis stond snel op en rent achter het figuur aan. Het is Guus! Simon haalt de kat in. Guus wordt boos en eet de muis op.");
			}
			else if (renLig == "liggen"){
				alert("Simon blijft liggen en geeft het leven op.");
			}
		}
		else if (renZoek == "zoeken"){
			alert("Als Simon de schuur binnen komt valt er een hark op zijn hoofd. Hij sterft.");
		}
	}
}