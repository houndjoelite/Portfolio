# Portfolio – Développeur Full-Stack

Ce dépôt contient un site statique en HTML/CSS/JavaScript destiné à présenter vos compétences et vos projets. Il est optimisé pour GitHub Pages.

## Fonctionnalités

* Design responsive moderne avec **mode clair/sombre**.
* Animations d’apparition via [AOS](https://michalsnik.github.io/aos/).
* Section projets générée dynamiquement depuis un tableau `projects` dans `js/main.js`.
* Formulaire de contact simple utilisant **Formspree** (à remplacer par votre ID).

## Structure

```
portfolio/
├── index.html         # Page principale
├── css/
│   └── style.css      # Styles globaux (dark/light, layout…)
├── js/
│   └── main.js        # Scripts (animations, theme, rendu projets)
└── README.md
```

## Déploiement sur GitHub Pages

1. Poussez le dossier `portfolio` dans un repository GitHub.
2. Dans **Settings → Pages**, choisissez la branche (par ex. `main`) et le dossier `/`.
3. Sauvegardez : votre site sera disponible sous `https://<username>.github.io/<repo>/`.

## Personnalisation rapide

* Remplacez `[Ton Nom]` et votre bio dans `index.html`.
* Mettez à jour le tableau `projects` dans `js/main.js` avec vos propres projets (titres, descriptions, images, liens).
* Ajoutez votre ID Formspree dans l’attribut `action` du formulaire.

Bon codage !
