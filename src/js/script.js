/**
 * Exemple de fonction pour obtenir toutes les informations de la base de données avec le script php/get.php
 * (ici les données sont affichées dans la console)
 */
function getAllData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'php/get.php?q=all', true);     // demande des données par php/get.php
    xhr.onload = function() {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            console.log(response);
        }
    };
    xhr.send();
}


/**
 * Exemple de fonction pour exécuter une requête POST sur la base de données avec le script php/set.php
 * Ici la requête supprime le membre dont l'id est passé en paramètre
 * 
 * (cf. README pour les paramètres de php/set.php)
 */
function deleteMembre(id_membre) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/set.php', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
        if (this.status === 200) {
            console.log("OK.");
        }
    }
    xhr.send('action=delete&membre=' + id_membre);
}
