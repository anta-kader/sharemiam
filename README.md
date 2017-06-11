
# ShareMiam

IF11 / LO10

## Technologies 

- [Angular](https://angular.io/)
- [ExpressJS](http://expressjs.com/)
- [CouchDB](http://couchdb.apache.org/)

## Installation du projet

- Cloner le répertoire
```sh
$ git clone https://github.com/anta-kader/sharemiam
```

- Installer les modules Node dans le projet
```sh
$ cd sharemiam/
$ npm install
```

- Copier le fichier .env.example en .env puis renseigner les valeurs demander

- Lancer le projet 
```sh
$ node server.js
```
- Vous trouverez le site à l'adresse suivante : http://localhost:3000/
- Vous avez accès au back à l'adresse suivante : http://localhost:3000/api

## Structure du projet

- Front - angular : src/
- Back - express : server/ 

## Bonnes pratiques

* Ne pas faire de modification directement sur la branche master !
* Créer sa propre branche comme ci-dessous puis faire de merge request.
* Penser à faire un pull de la branche master régulièrement

```sh
$ git checkout -b nom_de_votre_branche
```
> Cette commande vous permettra de créer votre branche et vous déplacer dessus

```sh
$ git push origin nom_de_votre_branche
```
> Avec cette commande, faites un push sur votre branche (si elle n'existe pas dans le repos, elle sera automatiquement crée)

## Services utilisés

* [Auht0](https://auth0.com/)

## Composants ajoutés 

* [Nano](https://github.com/dscape/nano) - CouchDB
* [Auth0.js](https://github.com/auth0/auth0.js) 
* [Bootstrap 3](http://getbootstrap.com/)
* [Angular Google Maps](https://angular-maps.com/) - Google Maps API avec Angular 2

## Références

* [Documentation Git](https://git-scm.com/documentation)
* [Tutoriel MEAN App with Angular 2](https://scotch.io/tutorials/mean-app-with-angular-2-and-the-angular-cli)
* [Tutoriel Auth0 - Angular](https://auth0.com/docs/quickstart/spa/angularjs/01-login)
* [Tutoriel Auth0 - Express API](https://auth0.com/docs/quickstart/backend/nodejs/00-getting-started)



