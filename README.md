# Foodscape

Escape game culinaire : un dîner thématique livré dans une **glacière cadenassée**. Les convives résolvent des énigmes (et scannent des QR codes) pour déverrouiller l’apéritif, le dîner, puis le dessert.

## Structure

```
src/
├── reservation/          # Site de réservation
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── assets/
└── themes/
    └── diamant-rouge/    # Thème « vol du diamant rouge »
        ├── index.html    # Prologue / présentation
        ├── styles.css
        ├── assets/
        └── indices/      # Pages QR (indices)
            ├── masque.html    # Casier I — Apéritif
            ├── chambre.html   # Casier II — Dîner
            └── ecrin.html     # Casier III — Dessert
```

## Prévisualisation

Ouvrir dans le navigateur :

- Réservation : `src/reservation/index.html`
- Thème : `src/themes/diamant-rouge/index.html`
- Indices QR : fichiers dans `src/themes/diamant-rouge/indices/`

## Thème actuel

**Le Diamant Rouge** — bal masqué parisien, dîner aux chandelles. Trois casiers : Le Masque, La Chambre, L’Écrin.
