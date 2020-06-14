//recuperation module
let toolbox = require('./toolbox.js');

let jeu = {
    //Initialise variable
    puissance4 : [],
    nbColonne : 7,
    nbLigne : 6,
    joueur1car: "x",
    joueur2car: "o",

    initialisation: function() {
        this.puissance4 = toolbox.initialiserTableauVide(this.nbLigne, this.nbColonne, 0);
    },
    /**
     * Permet d'afficher un tableau de puissance 4
     */
    afficherPuissance4: function() {
        for (let i = 0; i < this.puissance4.length; i++) {
            let ligne="";
            for(let j=0; j < this.puissance4[i].length; j++) {
                ligne += "| ";

                if(this.puissance4[i][j] === 0) {
                    ligne += "_"
                }else if(this.puissance4[i][j] === 1) {
                    ligne += this.joueur1car;
                }else if(this.puissance4[i][j] === 2) {
                    ligne += this.joueur2car;
                }let toolbox = require('./toolbox.js');

                ligne += " |";
            }//end for J
            console.log(ligne)
        }//end for I
    },
    jouerCase: function(joueur, ligne, colonne) {
        this.puissance4[ligne][colonne-1] = joueur;
    },
    /**
     * Function permettant de retourner la premiere ligne vide d'une colonne
     * @param {Number} colonne retourne -1 si la colonne est pleine
     */
    retournLigneCaseVideColonne: function(colonne) {
        for (let i = this.nbLigne-1; i>=0;i--) { //On part de la ligne 5 et on remonte pour trouver ligne vide
            if(this.verifCaseVide(i, colonne)) {
                return i;
            }  
        }
        return -1;
    },

    /**
     * Fonction permettant de saisir une colonne
     */
    saisirColonne: function(joueur) {
        //marque le numéro du joueur en cour
        if(joueur === 1 ){
            console.log("C'est au tour de Joueur 1");
        }
        else{
            console.log("C'est au tour de Joueur 2");
        }
        return parseInt(toolbox.saisieString('Quelle colonne ?'));
    },
    /**
     * Function permettant de retourner si une cellule est vide(return true / false)
     * @param {Number} ligne 
     * @param {Number} colonne 
     */
    verifCaseVide: function(ligne, colonne) {
        return this.puissance4[ligne][colonne-1] === 0; //si 0 la case est vide (expression boolean)
    },
    verificationFinJeu: function(joueur) {
        if(this.verificationLigneFinJeu(joueur) || this.verificationColoneFinJeu(joueur) || this.verificationDeiagonalFinJeu(joueur)) {
            return true
        }
        return false;
    },

    verificationLigneFinJeu: function(joueur) {
        for(let i = this.nbLigne-1; i >=0; i--) { //commence par la dernière ligne
            for(var j = 0; j< this.nbColonne-3; j++) {
                if( this.puissance4[i][j] === joueur &&
                    this.puissance4[i][j+1] === joueur &&
                    this.puissance4[i][j+2] === joueur &&
                    this.puissance4[i][j+3] === joueur
                    )return true;
            }
        }
        return false;
    },
    /**
     * Fonction permettant de verifier si un joueur à gagné en colonne
     * @param {Number} joueur 
     */
    verificationColoneFinJeu: function (joueur) {
        for(let i = 0; i < this.nbColonne; i++) {
            for (let j = this.nbLigne-4; j>=0; j--) {
                if( this.puissance4[j][i] === joueur &&
                    this.puissance4[j+1][i] === joueur &&
                    this.puissance4[j+2][i] === joueur &&
                    this.puissance4[j+3][i] === joueur
                    )return true;
            }
        }
        return false;
    },
    /**
     * Fonction permettant de verifier si un joueur à gagné en diagonal
     * @param {Number} joueur 
     */
    verificationDeiagonalFinJeu: function (joueur) {
        for(let i = this.nbLigne-1; i >=3; i--) { //commence par la dernière ligne
            for(var j = 0; j< this.nbColonne; j++) {
                if( this.puissance4[i][j] === joueur &&
                    this.puissance4[i-1][j+1] === joueur &&
                    this.puissance4[i-2][j+2] === joueur &&
                    this.puissance4[i-3][j+3] === joueur
                    )return true;
                    if( this.puissance4[i][j] === joueur &&
                        this.puissance4[i-1][j-1] === joueur &&
                        this.puissance4[i-2][j-2] === joueur &&
                        this.puissance4[i-3][j-3] === joueur
                        )return true;
            }
        }
        return false;
    },
}


module.exports = jeu;