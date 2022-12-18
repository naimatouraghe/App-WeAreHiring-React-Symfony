# App-WeAreHiring-React-Symfony

Un cabinet de recrutement vient de nous contacter pour réaliser une application Web leur permettant de déposer des offres d'emplois. Cette application web doit permettre de consulter ces offres d'emploi et de postuler.

## Ressources

- [Maquettes (Figma)](https://www.figma.com/file/Qo3FvK0i36tAPGODNO8y2K/Wireframe-DEV-TRAINING-%22We-are-hiring%22?node-id=457069%3A448)
- [Maquettes (Figma Community)](https://www.figma.com/community/file/1078263396258070163)
- [Documentation Symfony](https://symfony.com/doc/current/index.html)
- [Documentation React.js](https://fr.reactjs.org/docs/getting-started.html)
- [NelmioApiDocBundle](https://symfony.com/bundles/NelmioApiDocBundle/current/index.html)

## Contexte du projet

Le client étant pressé, nous alons mettre ne place une V1 ou l'accès aux offres d'emploi ne sera pas restreint. C'est à dire qu'il ne sera pas nécessaire de créer un compte pour voir les offres et pour postuler.

Nous passeront ensuite au développement d'une V2 avec gestion des utilisateurs.

Backend : Symfony 6.0 (PHP 8.0.2/ MySQL) Front : React 17.0.2

La partie front permettra aux utilisateurs de consulter et candidater à des offres.

Le backend permettra de créer, modifier et supprimer des offres d'emploi ainsi que de consulter les candidatures. Il devra fournir une API REST qui sera consommé par le front. Générer une documentation de l'API côté backend (/api/doc) en utilisant swagger. Liste des endpoints nécessaire pour l'API :

**V1**

-- /api/offers (GET)

-- /api/application/[offer_id] (POST)

-- /api/contact (POST)

**V2**

-- /api/login (GET)

-- /api/register (POST)

-- /api/my-applications (GET)

-- /api/fav/my-offers (GET)

-- /api/fav/[offer_id] (POST/DELETE)

Une offre est composé de :

- Un titre | obligatoire
- Un type (CDD / CDI / Stage / Autre) | obligatoire
- Une fonction (Développeur Web, Plaquiste, ...) | obligatoire
- Une description | obligatoire
- Une ville | obligatoire
- La date de création de l'annonce

Une candidature se compose de :

- Le nom du candidat | obligatoire
- Le prenom du candidat | obligatoire
- Le mail du candidat | obligatoire
- Le numéro de téléphone du candidat
- L'adresse du candidat
- L'annonce concernée
- La date de la candidature
- Lien vers le profil linkedIn
- Lien vers le profil github ou gitlab

Une fois la V1 terminée et validée, nous commencerons de developpement de la V2:

- Ajouter la possibilité de créer un compte (côté front)
- Obliger les utilisateurs à se connecter pour candidater à une offre
- Ajouter une page "Mes candidatures" listant toutes les candidatures d'un utilisateur connecté.
- Permettre aux utilisateurs de mettre des offres en favori et d'afficher la liste des leur offres favorites

## Critères de performance

L'application doit correspondre aux maquettes fournies

## Livrables

- Mono-repo gitlab contenant un dossier /front et un dossier /backend
- Une version en ligne de l'application
