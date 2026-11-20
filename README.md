# Hicham DJAMA — Portfolio

Portfolio interactif : réseaux · cybersécurité · systèmes · développement, au style futuriste / cyberpunk.

## Ce qu'il contient

- **Intro cinématique** : un cyber-samouraï avance sous la pluie d'une rue cyberpunk, un coup d'éclair ouvre un portail vers un autre monde, il le traverse et la caméra plonge à sa suite jusqu'au site.
  Une seconde intro (salle des machines + supercalculateur tranché) est disponible : dans `index.html`, remplace `const INTRO='portail'` par `const INTRO='samourai'`.
- **Site principal** : un réseau en orbite autour d'un noyau neuronal 3D. Chaque nœud est une section (À propos, Compétences, Projets, Parcours, Contact).
- **Version CV** (bouton `▤ version CV`, touche `C` ou lien `#cv`) : un CV clair, généré à partir des mêmes données, qui tient sur une page A4 à l'impression (« Enregistrer en PDF »).
- **Console « Assistant IA »** (touche `²`) : on peut lui écrire en langage naturel ou taper `help`, `cv`, `neofetch`… et `sudo hire hicham`.

Aucune librairie ni build : HTML, CSS et JavaScript (Canvas) dans un seul fichier.

## Liens directs

L'intro se joue une fois par visite. Un lien direct ouvre la page voulue sans passer par l'intro :

- `https://hichamovixh.github.io/cybercv/#cv` → la version CV
- `#apropos`, `#competences`, `#projets`, `#parcours`, `#contact` → la section correspondante

## Raccourcis

| Touche | Action |
|---|---|
| `1` à `5` | ouvrir une section |
| `←` `→` | section précédente / suivante |
| `C` | version CV |
| `²` | console IA |
| `Échap` | fermer |

## Structure

```
cybercv/
├── index.html            # tout le site (styles + scripts inclus)
└── assets/
    ├── portail.webp      # intro « portail » (30 images)
    ├── walk-anim.webp    # intro « samouraï » (16 images détourées)
    ├── holo.webp         # photo en hologramme (À propos + CV)
    └── og.jpg            # aperçu affiché quand on partage le lien (LinkedIn…)
```

## Modifier le contenu

Tout le texte du site **et** de la version CV est en haut du script, dans `index.html`, sous `CONTENU — modifie ici` :

- `PROFILE` : nom, ville, email, téléphone, présentation, ce que tu recherches ;
- `MODULES` : tes 4 domaines ;
- `SKILLS` : compétences par groupe (`[port décoratif, compétence, niveau sur 100]`) ;
- `PROJECTS` : projets ;
- `PARCOURS` : expériences (`type:'xp'`) et formations (`type:'edu'`) ;
- `EXEMPLE` : passe une section à `false` quand tu l'as remplie (le badge « contenu d'exemple » disparaît).

## Lancer en local

Ouvre `index.html` dans un navigateur (ou l'extension **Live Server** de VS Code).

## Mettre en ligne avec GitHub Pages

**Settings → Pages → Source : Deploy from a branch → `main` / `(root)`** → le site est publié sur `https://hichamovixh.github.io/cybercv/`.
