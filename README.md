![](https://graphql.org/img/og_image.png)
# Open GraphQL Toulouse

## What is GraphQL ?
`GraphQL` is a query language for APIs and a runtime for fulfilling those queries with your existing data. `GraphQL` provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

[Check GraphQL Specs](https://graphql.org)

## Why on Open Data ?
This project was created to facilitate the use of the service's data: `data.toulouse-metropole.fr`

`GraphQL` is a solution to solve the current problems of the APIs of this service such as : 
- Lack of documentation
- The lack of ease of use of the global API
- The lack of consistency through the data
- Can't realize easy connections beetween Apis (Datasets)

To offer a quality and useful GraphQL API, only the APIs on the most "popular" datasets will be integrated!

## GraphQL Design
Each dataset has its own entry at the root of the `Graphql Server`


## Popular APis to Integrate
1. `Agenda des manifestations culturelles - Toulouse` : ⚠️
2. `Codes postaux de Toulouse` : ⚠️
3. `Chantiers en cours - Toulouse Métropole` : ⚠️

> Info

⚠️ : in progress

✅ : Operational

## Run the project
First of all get into the directory an run :
`npm i`
> Install all required packages

And then run : 
`npm run start`

**Now the server run on `http://localhost:4004` and you can go to this url to play with the integrated `GraphQL PlayGround`**

## Dev on the project
Run : `npm i` before developing and then run : `npm run dev`
> The server restart automatically when you save files in `src` directory