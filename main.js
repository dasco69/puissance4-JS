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
function afficherPuissance4(tab, joueur1 , joueur2) {
    for (let i = 0; i < tab.length; i++) {
        let ligne="";
        for(let j=0; j < tab[i].length; j++) {
            ligne += "| ";

            if(tab[i][j] === 0) {
                ligne += "_"
            }else if(tab[i][j] === 1) {
                ligne += joueur1;
            }else if(tab[i][j] === 2) {
                ligne += joueur2;
            }

            ligne += " |";
        }//end for J
        console.log(ligne)
    }//end for I
}