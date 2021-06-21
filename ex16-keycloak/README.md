# Keycloak

## Installation

Download keycloak..

```shell
docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin quay.io/keycloak/keycloak:14.0.0
```

Download keycloak-js...

```shell
npm i keycloak-js
yarn add keycloak-js
```

## Guide

- **realm**: Domain in which several types of entities can e defined.
- **users**: basic entities that are allowed access to a Keycloak-secured system
- **clients**: browser apps and web services that are allowed to request a login

<a href='https://scalac.io/blog/user-authentication-keycloak-1/'>Full document</a>
