//recuperation module
let readline = require("readline-sync");

var toolbox = {
    /**
     * Fonction permetant de recuperer une saisie
     * @param {String} string 
     */
    saisieString: function(string) {
        return readline.question(string);
    },
    /**
     * Permet d'initialiser un tableau de tableau en fonction d'in nombre de ligne de colonne passer en parametre
     * @param {Number} row 
     * @param {Number} column 
     * @param {*} car 
     */
    initialiserTableauVide: function(row, column, car = '') {
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
}

module.exports = toolbox;