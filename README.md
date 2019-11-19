## Utiliser Webpack pour créer des tâches automatisées ##
Code de projet de cours Open Classrooms
Clonez ce repository et ajoutez-y webpack comme expliqué dans l'activité.

## Note au correcteur ##

- La partie blog du site ne fonctionne pas (lorsque l'on clique sur "Ajouter un article"), car l'adresse de l'api "https://master-7rqtwti-fus3tltfddn7w.eu-2.platformsh.site" ne fonctionne plus (erreur 404).

- Pour tester l'actualisation automatique du navigateur, vous pouvez modifier le message d'erreur dans blog.js du dossier src/ (ligne 10) et recliquer sur le bouton "Ajouter un article" pour constater la modification du message.

Ajuster votre éditeur de texte
===============================
Lors de l'utilisation de la compilation automatique de votre code, des problèmes peuvent survenir lors de l'enregistrement de vos fichiers. Certains éditeurs ont une fonctionnalité "écriture sécurisée" qui peut potentiellement interférer avec la recompilation.

Pour désactiver cette fonctionnalité dans certains éditeurs courants, voir la liste ci-dessous:

- Sublime Text 3 : Ajoutez atomic_save: 'false' à vos préférences utilisateur.
- IDE JetBrains (par exemple, WebStorm) : Décochez la case "Utiliser une écriture sécurisée" dans Preferences > Appearance & Behavior > System Settings.
- Vim : Ajoutez :set backupcopy=yesà vos paramètres.
