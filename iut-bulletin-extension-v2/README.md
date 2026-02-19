# 🎓 IUT Bulletin+

Une extension Chrome qui remplace l'interface du bulletin de notes de l'IUT de Lille par un dashboard moderne et intuitif.

## ✨ Fonctionnalités

- **Dashboard moderne** avec moyennes par UE, barres de progression, code couleur
- **Vue détaillée** des ressources et SAÉ avec toutes les évaluations
- **Simulateur de notes** 🧮 pour voir l'impact d'une note sur tes moyennes
- **Suivi des absences** avec statut justifié/injustifié
- **Mode sombre/clair** 
- **Design responsive** (fonctionne aussi sur écran réduit)

## 📦 Installation

### Méthode rapide (mode développeur)

1. **Télécharge** et dézippe ce dossier
2. Ouvre Chrome et va dans `chrome://extensions/`
3. Active le **Mode développeur** (toggle en haut à droite)
4. Clique sur **"Charger l'extension non empaquetée"**
5. Sélectionne le dossier `iut-bulletin-extension`
6. C'est prêt ! Va sur https://bulletin.iut-info.univ-lille.fr et connecte-toi normalement

### Ça marche comment ?

L'extension s'active automatiquement quand tu es sur le site du bulletin. Elle intercepte les données JSON que le site charge normalement et les affiche dans une interface complètement repensée. **Tes identifiants ne transitent jamais par l'extension** — tu te connectes via le CAS de Lille comme d'habitude.

## 🧮 Simulateur

Clique sur le bouton 🧮 en bas à droite pour ouvrir le simulateur. Tu peux modifier n'importe quelle note pour voir instantanément l'impact sur tes moyennes d'UE.

## 🔒 Confidentialité

- **Aucune donnée n'est envoyée** à un serveur externe
- L'extension fonctionne **100% côté client**
- Aucun cookie ajouté, aucun tracking
- Code source ouvert et vérifiable

## 🛠 Structure

```
iut-bulletin-extension/
├── manifest.json      # Configuration Chrome extension (Manifest V3)
├── inject.js          # Content script principal
├── icon48.png         # Icône 48x48
├── icon128.png        # Icône 128x128
└── README.md
```

## ⚠️ Notes

- L'extension dépend de la structure de l'API du bulletin. Si l'IUT met à jour le site, l'extension peut nécessiter une mise à jour.
- Testé sur Chrome/Chromium. Devrait aussi fonctionner sur Edge, Brave, et autres navigateurs basés sur Chromium.
