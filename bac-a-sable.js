/* Mini projet : valider un rendez-vous */
// je veux créer un sommaire et le push sur github
// je recrée une modif pour fusionner ensuite

// Exemple 1 : pour une durée de RDV de 15 minutes

// Début du RDV : 15h40
let debutRdvHeures = 15;
let debutRdvMinutes = 40;

// Fin de journée : 16h30
let finJourneeHeures = 16;
let finJourneeMinutes = 30;

// Durée du RDV : 15 minutes
let duree;

for (i=0; i<=120; i=i+1) {
    duree = i;
    calculDifferentsRdv();
}




function calculDifferentsRdv() {

    // ETAPE 1 : Calcul de la fin du RDV
let finRdvHeures = debutRdvHeures;
let finRdvMinutes = debutRdvMinutes + duree;

// Correction du dépassement des 60 minutes
while (finRdvMinutes >= 60) {
    finRdvHeures = finRdvHeures + 1;
    finRdvMinutes = finRdvMinutes - 60;
}

// ETAPE 2 : Est-ce que la fin du RDV est avant la fin de la journée ?
if (finRdvHeures < finJourneeHeures
    || (finRdvHeures === finJourneeHeures && finRdvMinutes <= finJourneeMinutes)) {
         console.log("Début du programme:");
         console.log("Le RDV est OK");
         console.log("Car la durée du Rdv est de " + duree + " Minutes");
         
} else {
    console.log("Début du programme:");
    console.log("Le RDV est impossible");
    console.log("Car la durée du Rdv est de " + duree + " Minutes");
    
}

// ETAPE 3 : Affichage de l'heure de fin du RDV
if (finRdvMinutes < 10) {
    console.log("Le RDV se terminera à " + finRdvHeures + "h0" + finRdvMinutes);
    console.log('\n');
} else {
    console.log("Le RDV se terminera à " + finRdvHeures + "h" + finRdvMinutes);
    console.log('\n');
}

}
