//recuperation module
let toolbox = require('./toolbox.js');
let jeu = require('./jeu.js')


/*************Start game*************/

intro();
jeu.joueur1car = choixCaractere(1);
jeu.joueur2car = choixCaractere(2);

//Instancie la  fonction initialiserTableauVide
jeu.initialisation();
//Affichage
jeu.afficherPuissance4();

/*************End game*************/


/*
Tant que pasTermine
    jouer(j1)
    jouer(j2)
Fin Tant Que
*/
 
while(true) { //boucle infinie sur true

    if(jouerCase(1)) { //si jouerCase return true pour joueur 1  alors a gagné
        console.log("Joueur 1 à Gagné");
        break;
    }
    if(jouerCase(2)) { //si jouerCase return true pour joueur 2  alors a gagné
        console.log("Joueur 2 à Gagné");
        break;
    }
}
/**
 * Function affichant le texte de bienvenue
 * @param {String} txt
 */
function intro() {
    let txt = "\n***********************************\n";
    txt += "***** Bienvenu su Puissance 4 *****\n";
    txt += "***********************************\n";
    console.log(txt);
}
function choixCaractere(joueur){ 
    return toolbox.saisieString(`Veuillez choisir le caractère que vous voulez pour joueur ${joueur} :`)
}

/**
 * Function permettant à un joueur de jouer une case
 * Retourne true si le joueur à gagné
 * @param {Number} joueur 
 */
function jouerCase(joueur) {
    let ligneVide = -1;
    let colonne = -1;

    while(ligneVide === -1 || colonne <=0 || colonne >7 ) {
        console.log("Choisir une colonne à un emplacement vide");
        colonne = jeu.saisirColonne(joueur);
        ligneVide = jeu.retournLigneCaseVideColonne(colonne);
    }
    
    jeu.jouerCase(joueur, ligneVide, colonne); //colonne et -1 pour éviter de partir de 0 à 7
    jeu.afficherPuissance4();
    return jeu.verificationFinJeu(joueur);
}//Fin jouerCase



