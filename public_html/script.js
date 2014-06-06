// Ce fichier est téléchargé et exécute par le navigateur au moment de 
// l'affichage de `index.html`.

// Cette ligne utilise jQuery pour trouver l'élément identifié par `search-bar`
// et enregistrer une action à exécuter à chaque fois qu'une touche est tapée
// alors que le curseur est dans l'élément.
$("#search-bar").keyup(function() {
    // A chaque fois que le champs de recherche est modifié ce code est executé 
    // jusqu'à l'accolade suivante.
    
    // Lit le texte actuellement contennu dans la barre de recherche.
    var searchedText = $("#search-bar").val();
    // Decoupe le texte en une liste de mots
    var searchedWords = searchedText.split(/\W+/);
    
    var total = 0; // compteur du nombre total de vidéo
    var visible = 0; // compteur du nombre de vidéo corresmondant à la recherche

    // Utilise jQuery pour trouver les balises `li` situées sous l'élément 
    // identifié par `video-list`. Cela produit la liste des vidéos. Une fonction 
    // est executée pour chacune des vidéo.
    $("#video-list li").each(function (elementPosition, element) {
        
        total++; // incrémente le total de vidéo d'une unité
        // Obtient un text contennant le tite et la description.
        // Un vidéo est rendue visible si elle contient au moins un mot de la recherche.
        var videoText = $(element).text();
        // Pour chaque mot de la recherche
        for (var i = 0; i < searchedWords.length; i++) {
            // Si le mot est présent dans le tite ou la description de la vidéo
            if (videoText.indexOf(searchedWords[i]) >= 0) {
                visible++;
                // Rendre la vidéo visible
                $(element).show();
                return; // Rendre la main pour passer à la vidéo suivante
                // cela quite la fonction sans terminer la boucle.
            }
        }
        // On passe ici quand aucun des mots de la recherche n'est présent.
        // La vidéo ne corespond pas à la recherche, il faut la cacher.
        $(element).hide();
    });// fin de la fonction appliquée à chaque video    

    // Ici l'inspection des vidéos est terminée.
        
    // Change le texte de la balise identifiée par `status`
    var status = visible + " video sur " + total;
    if (visible > 2)
        status = visible + " videos sur " + total;
    $("#status").text(status);

    // Rends visible le bloc identifié par `no-video-message` si aucune vidéo 
    // n'est visible.
    $("#no-video-message").toggle(visible === 0);
    
});// fin de la fonction appelées à chaque changement de la barre de recherche.

