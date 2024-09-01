# FullStack MERN project by Rktoo
# Under Construction 😊

![banner](image-banner.png)

Bienvenue dans mon projet **Recipe Every Day**. C'est un projet séparer en deux couches distinctes pour s'initier aux API avec le framework ExpressJS.

## Table des matières
- [Description](#description)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [Licence](#licence)

## Description
C'est un projet fullstack qui utilise ReactJs pour le côté client et ExpressJs pour le côté serveur. Et la base de donnée est avec MongoDB qui est facile les intéractions.

## Fonctionnalités
En cours de construction

## Installation
1. **Clonez le dépot** :
    ```bash
    git clone https://github.com/Rktoo/Recipe-EveryDay.git
    cd Recipe-EveryDay
2. **Installer le front-end** :
    ```bash
    cd recette-client
    npm i
3. **Installer le back-end** :
    ```bash
    cd ..
    cd recette-backend
    npm i
4. **Activer le service mongoDB pour pouvoir l'utiliser** :
    ```bash
    NET START mongoDB Server
    
## Configuration
1. **Créez les fichiers d'environnement** :
    1.a. Pour le backend :
    Créez le fichier .env à la racine du backend et ajouter vos variables :
    PORT = 6001
    MONGODB_URI = "mongodb://localhost/recipes"

    1.b. Pour le front :
    Créez le fichier .env à la racine du client et ajouter vos variables :
    VITE_API_BASE_URL=http://localhost:6001/api/recipes
    VITE_API_BASE_PUBLIC=http://localhost:6001
2. **Faites le seed de la base de donnée** :

    Depuis le repertoire recette-backend
    ```bash
    node .\scripts\insertRecipes.js
3. **Démarrez ensuite le serveur** :
    ```bash
    npm start
4. **Démarrez le côté client** :
Depuis le repertoire recette-client
    ```bash
    npm run dev

## Utilisation
1. **Vous aurez des recettes que vous pourrez essayer à la maison**
2. **Les visiteurs peuvent demander des recettes sans s'inscrire. Il n'y a pas d'inscription. 😊**
3. **Aimez les recettes.**
3. **Ajouter les demandes de recette sur le site depuis l'administrateur du backend. En cours de construction**

## LICENCE
1. **Ce projet est sous la licent MIT.**

# Merci de votre visite. Le projet est en cours de finalisation !