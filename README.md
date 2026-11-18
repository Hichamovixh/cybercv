# Hicham DJAMA — Portfolio

Portfolio de développeur & ingénieur réseaux, au style futuriste / cyberpunk.

## Ce qu'il contient

- **Intro cinématique** : un cyber-samouraï entre dans une salle des machines, tranche un supercalculateur géant, l'écran se coupe en deux et révèle le site.
- **Site principal** : un réseau en orbite autour d'un noyau neuronal 3D. Chaque nœud est une section (À propos, Compétences, Projets, Parcours, Contact).
- **Console « Assistant IA »** : touche `²` ; on peut lui écrire en langage naturel ou taper `help`.

Aucune librairie ni build : HTML, CSS et JavaScript (Canvas) dans un seul fichier.

## Structure

```
portfolio-hicham-djama/
├── index.html            # tout le site (styles + scripts inclus)
└── assets/
    └── walk-anim.webp    # animation de l'intro (16 images détourées)
```

## Lancer en local

Ouvre simplement `index.html` dans un navigateur.
Dans VS Code, l'extension **Live Server** permet de le recharger automatiquement à chaque modification.

## Modifier le contenu

Tous les textes sont en haut du script, dans `index.html`, sous le commentaire `CONTENU — modifie ici` :
`NAME`, `EMAIL`, puis l'objet `SECTIONS` (à propos, compétences, projets, parcours, contact).

## Mettre en ligne avec GitHub Pages

1. Pousse le dépôt sur GitHub.
2. Dans le dépôt : **Settings → Pages → Source : Deploy from a branch → `main` / `(root)`**.
3. Le site sera disponible à `https://<ton-pseudo>.github.io/<nom-du-depot>/`.
