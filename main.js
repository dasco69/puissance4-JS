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
        colonne = saisirColonne();
        ligneVide = retournLigneCaseVideColonne(colonne);
    }
    
    puissance4[ligneVide][colonne-1] = joueur; //colonne et -1 pour éviter de partir de 0 à 7
    afficherPuissance4(puissance4, joueur1car, joueur2car);
    return verificationFinJeu(joueur);
}//Fin jouerCase

/**
 * Fonction permettant de saisir une colonne
 */
function saisirColonne() {
    return parseInt(readline.question('Quelle colonne ?'));
}
/**
 * Function permettant de retourner la premiere ligne vide d'une colonne
 * @param {Number} colonne retourne -1 si la colonne est pleine
 */
function retournLigneCaseVideColonne(colonne) {
    for (let i = nbLigne-1; i>=0;i--) { //On part de la ligne 5 et on remonte pour trouver ligne vide
        if(verifCaseVide(i, colonne)) {
            return i;
        }  
    }
    return -1;
}
/**
 * Function permettant de retourner si une cellule est vide(return true / false)
 * @param {Number} ligne 
 * @param {Number} colonne 
 */
function verifCaseVide(ligne, colonne) {
    return puissance4[ligne][colonne-1] === 0; //si 0 la case est vide (expression boolean)
}
function verificationFinJeu(joueur) {
    if(verificationLigneFinJeu(joueur) || verificationColoneFinJeu(joueur) || verificationDeiagonalFinJeu(joueur)) {
        return true
    }
    return false;
}

function verificationLigneFinJeu(joueur) {
    for(let i = nbLigne-1; i >=0; i--) { //commence par la dernière ligne
        for(var j = 0; j< nbColonne-3; j++) {
            if( puissance4[i][j] === joueur &&
                puissance4[i][j+1] === joueur &&
                puissance4[i][j+2] === joueur &&
                puissance4[i][j+3] === joueur
                ) {
                return true;
            }
        }
    }
    return false;
}
function verificationColoneFinJeu (joueur) {

}
function verificationDeiagonalFinJeu (joueur) {

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