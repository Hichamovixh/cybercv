# cybercv — site pro d'Hicham Djama

Site statique publié par GitHub Pages depuis la branche `main` : https://hichamovixh.github.io/cybercv/. Tout ce qui arrive sur `main` est en ligne quelques minutes après : travailler sur une branche et passer par une pull request.

## Fichiers

- `index.html` : le site pro qui vend les services (services, méthode, réalisations, parcours, FAQ, contact, mentions légales). C'est la page que voient les clients.
- `interactif.html` : l'ancien portfolio cyberpunk (intro animée, noyau 3D, version CV, console). Il garde ses propres données (`SERVICES`, `PROFILE`) : si un service ou un lien change, le changer dans les deux pages.
- `demo-salon/index.html` : démo d'un salon fictif « Maison Lumière » avec réservation. Elle doit rester marquée comme démo (bandeau, `noindex`) et n'enregistrer aucune réservation.
- `assets/` : images optimisées (WebP, `og.jpg` pour les partages). `sitemap.xml` et `robots.txt` à jour si une page est ajoutée.

## Pas de build

HTML, CSS et JavaScript dans chaque fichier, sans bibliothèque ni dépendance. Ne pas ajouter de framework, de CDN ni de traceur. Pour vérifier : ouvrir la page dans un navigateur (ou Playwright), en largeur mobile et bureau.

## Données qui comptent

- Lien de réservation : `const BOOKING` en bas d'`index.html` ; le script l'applique à tous les liens `.js-book`.
- E-mail pro : hicham.djamakaze@gmail.com.
- Prix : aucun n'est affiché, le site renvoie vers un devis gratuit. Tarifs de lancement utilisés dans les devis : site + prise de rendez-vous 590 €, demandes de devis + relances 690 €, « Payé à temps » 190 €, maintenance 29 €/mois. Si des prix sont ajoutés au site, ajouter aussi « TVA non applicable, art. 293 B du CGI » (micro-entreprise en franchise de TVA).

## Pièges

- Ne jamais publier de numéro de téléphone, d'adresse personnelle ni de donnée sur l'employeur au-delà de ce qui est déjà en ligne (Hicham est administrateur réseaux & systèmes en CDI dans un établissement public).
- Pas d'avis clients, de logos de clients ni de chiffres inventés : seulement de vraies réalisations, et les démos sont annoncées comme démos.
- Textes en français, simples, en vouvoyant le visiteur.
- Images : WebP, compressées, avec un attribut `alt` qui décrit l'image.
