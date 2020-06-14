//recuperation module
let readline = require("readline-sync");

//Initialise variable
let puissance4 = [];
let nbColonne = 7,
    nbLigne = 6;
const joueur1car = "x";
const joueur2car = "o";

//Instancie la  fonction initialiserTableauVide
puissance4 = initialiserTableauVide(nbLigne, nbColonne, 0);
//Affichage
afficherPuissance4(puissance4, joueur1car, joueur2car);


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

function jouerCase(joueur) {
    let ligneVide = -1;
    let colonne = -1;

    while(ligneVide === -1 || colonne <=0 || colonne >7 ) {
        console.log("Choisir une colonne à un emplacement vide");
        colonne = saisirColonne();
        ligneVide = retournLigneCaseVideColonne(colonne);
    }
    
    puissance4[ligneVide][colonne-1] = joueur; //colonne et -1 pour éviter de partir de 0 à 7
    afficherPuissance4(puissance4, joueur1car, joueur2car);
    return verificationFinJeu();
}//Fin jouerCase

/**
 * Fonction permettant de saisir une colonne
 */
function saisirColonne() {
    return parseInt(readline.question('Quelle colonne ?'));
}
function retournLigneCaseVideColonne(colonne) {
    return 5;
}
function verificationFinJeu() {
    return true;
}

/**
 * Permet d'initialiser un tableau de tableau en fonction d'in nombre de ligne de colonne passer en parametre
 * @param {Number} row 
 * @param {Number} column 
 * @param {*} car 
 */
function initialiserTableauVide(row, column, car = '') {
    let tab = [];
    for (let i = 0; i < row; i++) {
        let ligne = [];
        for (let j = 0; j < column; j++) {
            ligne.push(car);
            
        }//end for J
        tab.push(ligne)
    }//end for I
    return tab;
}//Fin initialiserTableauVide()
/**
 * Permet d'afficher un tableau de puissance 4
 * @param {Array<String} tab tableau de car
 * @param {String} joueur1 le car de joueur1
 * @param {String} joueur2 le car de joueur2
 */
function afficherPuissance4(tab, j1 , j2) {
    for (let i = 0; i < tab.length; i++) {
        let ligne="";
        for(let j=0; j < tab[i].length; j++) {
            ligne += "| ";

            if(tab[i][j] === 0) {
                ligne += "_"
            }else if(tab[i][j] === 1) {
                ligne += j1;
            }else if(tab[i][j] === 2) {
                ligne += j2;
            }

            ligne += " |";
        }//end for J
        console.log(ligne)
    }//end for I
}